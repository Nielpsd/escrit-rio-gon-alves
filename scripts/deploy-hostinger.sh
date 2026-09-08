#!/usr/bin/env bash
# Gera o pacote estático pronto para subir no Gerenciador de Arquivos da Hostinger.
#
# Uso:
#   ./scripts/deploy-hostinger.sh
#
# Requer as variáveis VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no ambiente
# (ou em .env.local) para o build funcionar e para o sitemap-blog.xml sair
# preenchido com os posts publicados.
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Instalando dependências"
npm ci

echo "==> Buildando o site (SSR + prerender das rotas estáticas)"
npm run build

echo "==> Gerando sitemap-blog.xml estático"
node scripts/generate-sitemap-blog.mjs

echo "==> Garantindo .htaccess de SPA fallback no output"
cp public/.htaccess dist/client/.htaccess

echo "==> Removendo /metas do pacote (ferramenta à parte, não faz parte do site)"
rm -rf dist/client/metas

echo "==> Limpando metadados do macOS (._*, .DS_Store) que sobram em discos exFAT"
find dist/client -name "._*" -delete
find dist/client -name ".DS_Store" -delete

OUT_ZIP="hostinger-deploy.zip"
echo "==> Empacotando dist/client em $OUT_ZIP"
rm -f "$OUT_ZIP"
(cd dist/client && zip -rXq "../../$OUT_ZIP" .)

echo ""
echo "Pronto! $(unzip -l "$OUT_ZIP" | tail -1 | awk '{print $2}') arquivos em $OUT_ZIP."
echo ""
echo "IMPORTANTE — zips grandes (centenas de arquivos em subpastas) costumam"
echo "extrair incompleto pelo botão 'Extrair' do Gerenciador de Arquivos da"
echo "Hostinger (falha silenciosa: pastas como assets/, team/, bio/ ficam vazias"
echo "e o .htaccess devolve o index.html no lugar do arquivo real)."
echo "Por isso, prefira subir por FTP/SFTP (hPanel > Arquivos > Contas FTP):"
echo "  1. Crie/veja as credenciais FTP no hPanel"
echo "  2. Conecte com um cliente (FileZilla, Cyberduck, etc.) em ftp.seudominio.com"
echo "  3. Apague o conteúdo antigo de public_html"
echo "  4. Suba TODO o conteúdo de dist/client (não o .zip) direto pra public_html,"
echo "     mantendo a estrutura de pastas"
echo "  5. Confirme que .htaccess foi enviado (é arquivo oculto)"
echo ""
echo "Se preferir usar o Gerenciador de Arquivos mesmo assim: suba o $OUT_ZIP,"
echo "extraia, e depois CONFIRA se pastas como assets/ e team/ realmente têm"
echo "arquivos dentro (não só a pasta vazia) antes de considerar concluído."
echo ""
echo "Rotas dinâmicas server-side (ex: /api/server.js, sitemap-blog sempre"
echo "atualizado) não funcionam em hospedagem estática pura — este pacote serve"
echo "as páginas pré-renderizadas do site + SPA fallback. A ferramenta /metas foi"
echo "excluída do pacote."
