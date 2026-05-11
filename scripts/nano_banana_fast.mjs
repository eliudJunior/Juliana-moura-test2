import fs from 'fs';
import path from 'path';

const apiKey = process.env.GEMINI_API_KEY;
const prompt = process.argv[2];
const outputPath = process.argv[3];

if (!apiKey) {
    console.error("ERRO: Variável de ambiente GEMINI_API_KEY não encontrada.");
    process.exit(1);
}

if (!prompt || !outputPath) {
    console.error("Uso: node nano_banana_fast.mjs '<prompt>' <caminho_da_imagem.jpg>");
    process.exit(1);
}

async function generateImage() {
    console.log(`Gerando imagem (Modelo 4.0 Fast) para: "${prompt}"...`);
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                instances: [{ prompt: prompt }],
                parameters: {
                    sampleCount: 1,
                    outputOptions: { mimeType: 'image/jpeg' }
                }
            })
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`Erro na API (${response.status}): ${errText}`);
        }

        const data = await response.json();
        
        if (data.predictions && data.predictions.length > 0) {
            const base64Image = data.predictions[0].bytesBase64Encoded;
            fs.mkdirSync(path.dirname(outputPath), { recursive: true });
            fs.writeFileSync(outputPath, Buffer.from(base64Image, 'base64'));
            console.log(`✅ Sucesso! Imagem salva em: ${outputPath}`);
        } else {
            console.error("ERRO: Nenhuma imagem retornada pela API.");
        }
    } catch (error) {
        console.error("ERRO na geração da imagem:", error.message);
    }
}

generateImage();
