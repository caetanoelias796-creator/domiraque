import os
import shutil
from PIL import Image

BASE_DIR = r"c:\Users\Elias\Documents\Dom Iraque pizzaria"
SOURCE_DIR = os.path.join(BASE_DIR, "Nova pasta")
PUBLIC_ASSETS = os.path.join(BASE_DIR, "public", "assets")
PRODUCTS_DIR = os.path.join(PUBLIC_ASSETS, "products")
BANNERS_DIR = os.path.join(PUBLIC_ASSETS, "banners")
BRAND_DIR = os.path.join(PUBLIC_ASSETS, "brand")

os.makedirs(PRODUCTS_DIR, exist_ok=True)
os.makedirs(BANNERS_DIR, exist_ok=True)
os.makedirs(BRAND_DIR, exist_ok=True)

# Copiar banners em alta definicao com nomes claros e descritivos
banners_map = {
    "859135917_18181405027441712_402958885467510460_n.jpg": "institutional_anniversary.jpg",
    "502996372_18129056842441712_4175292897650989435_n.webp": "catalog_cover.webp",
    "503026698_18129056893441712_1180091887189164005_n.webp": "catalog_pizzas.webp",
    "502974287_18129056905441712_5107448438082806853_n.webp": "catalog_assados_1.webp",
    "503064037_18129056926441712_6234922905535467868_n.webp": "catalog_assados_2.webp",
    "503064193_18129056950441712_4988141160696749694_n.webp": "catalog_fritos_mini.webp",
    "503852556_18129056869441712_4844550061029047524_n.webp": "catalog_panificados.webp",
    "503915975_18129056980441712_969350884488551916_n.webp": "catalog_sobremesas.webp",
    "504172928_18129056938441712_8866560525115001602_n.webp": "catalog_lanches_prontos.webp"
}

for src_name, dest_name in banners_map.items():
    src_path = os.path.join(SOURCE_DIR, src_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, os.path.join(BANNERS_DIR, dest_name))
        print(f"Banner copiado: {dest_name}")

# Extrair logotipo da marca a partir da imagem institucional e da capa
try:
    brand_src = os.path.join(SOURCE_DIR, "859135917_18181405027441712_402958885467510460_n.jpg")
    img_brand = Image.open(brand_src)
    w, h = img_brand.size
    # O logo 'DomIraque PÃES - PIZZAS - LANCHES' está na parte inferior central
    # [left, upper, right, lower]
    logo_crop = img_brand.crop((int(w * 0.25), int(h * 0.82), int(w * 0.75), int(h * 0.885)))
    logo_crop.save(os.path.join(BRAND_DIR, "logo_dom_iraque.png"))
    print("Logo extraído com sucesso")
except Exception as e:
    print(f"Erro ao extrair logo: {e}")

# Agora recortes de produtos chave para os cartões de produtos
crops_config = [
    # Pizzas
    {
        "src": "503026698_18129056893441712_1180091887189164005_n.webp",
        "items": [
            ("pizza_sem_borda.webp", (0.47, 0.31, 0.94, 0.49)),
            ("pizza_com_borda.webp", (0.47, 0.58, 0.96, 0.76)),
            ("pizza_individual.webp", (0.44, 0.78, 0.88, 0.96)),
        ]
    },
    # Sobremesas
    {
        "src": "503915975_18129056980441712_969350884488551916_n.webp",
        "items": [
            ("torta_fina.webp", (0.04, 0.34, 0.48, 0.58)),
            ("petit_gateau.webp", (0.50, 0.34, 0.96, 0.58)),
            ("mini_pudim.webp", (0.04, 0.65, 0.48, 0.89)),
            ("torta_bolacha.webp", (0.50, 0.65, 0.96, 0.89)),
        ]
    },
    # Assados
    {
        "src": "502974287_18129056905441712_5107448438082806853_n.webp",
        "items": [
            ("croissants.webp", (0.11, 0.18, 0.35, 0.42)),
            ("mini_empada.webp", (0.11, 0.43, 0.35, 0.50)),
            ("dog_alemao.webp", (0.11, 0.51, 0.35, 0.58)),
            ("pastel_assado_integral.webp", (0.11, 0.59, 0.35, 0.71)),
            ("pastel_assado.webp", (0.11, 0.71, 0.35, 0.83)),
            ("hamburgão_assado.webp", (0.11, 0.86, 0.35, 0.93)),
        ]
    },
    # Assados 2
    {
        "src": "503064037_18129056926441712_6234922905535467868_n.webp",
        "items": [
            ("mini_rosquinha_polvilho.webp", (0.08, 0.20, 0.31, 0.28)),
            ("pao_de_queijo.webp", (0.08, 0.28, 0.31, 0.35)),
            ("folhados.webp", (0.08, 0.35, 0.31, 0.47)),
            ("mini_folhados.webp", (0.08, 0.47, 0.31, 0.59)),
            ("massa_folhada.webp", (0.08, 0.59, 0.31, 0.67)),
            ("calabrinho.webp", (0.08, 0.67, 0.31, 0.79)),
            ("bauru_folhado.webp", (0.08, 0.79, 0.31, 0.91)),
        ]
    },
    # Fritos e Mini
    {
        "src": "503064193_18129056950441712_4988141160696749694_n.webp",
        "items": [
            ("coxinha_lanche.webp", (0.07, 0.16, 0.32, 0.22)),
            ("massa_sonho.webp", (0.07, 0.22, 0.32, 0.28)),
            ("pasteis_fritos.webp", (0.07, 0.28, 0.32, 0.36)),
            ("donuts_fritar.webp", (0.07, 0.36, 0.32, 0.43)),
            ("batata_deutschips.webp", (0.07, 0.43, 0.32, 0.50)),
            ("mini_coxinha.webp", (0.67, 0.56, 0.95, 0.67)),
            ("mini_croquete.webp", (0.60, 0.65, 0.81, 0.72)),
            ("mini_bolinha.webp", (0.68, 0.68, 0.96, 0.79)),
            ("mini_risoles.webp", (0.59, 0.76, 0.85, 0.87)),
            ("mini_churros.webp", (0.59, 0.86, 0.94, 0.98)),
        ]
    },
    # Panificados
    {
        "src": "503852556_18129056869441712_4844550061029047524_n.webp",
        "items": [
            ("pao_frances.webp", (0.08, 0.18, 0.32, 0.29)),
            ("pao_cervejinha.webp", (0.08, 0.29, 0.32, 0.41)),
            ("baguete_panificados.webp", (0.08, 0.41, 0.32, 0.48)),
            ("massa_doce.webp", (0.08, 0.48, 0.32, 0.55)),
            ("sovadinho.webp", (0.08, 0.55, 0.32, 0.60)),
            ("pao_de_forma.webp", (0.08, 0.60, 0.32, 0.72)),
            ("cuca_artesanal.webp", (0.08, 0.72, 0.32, 0.80)),
            ("pao_gajeta.webp", (0.08, 0.80, 0.32, 0.85)),
            ("rosca_polvilho.webp", (0.08, 0.85, 0.32, 0.90)),
            ("pao_cabrito.webp", (0.08, 0.90, 0.32, 0.95)),
        ]
    },
    # Lanches Prontos
    {
        "src": "504172928_18129056938441712_8866560525115001602_n.webp",
        "items": [
            ("baguete_recheada.webp", (0.16, 0.18, 0.36, 0.25)),
            ("calzone.webp", (0.16, 0.26, 0.36, 0.33)),
            ("hamburgão_lanche.webp", (0.16, 0.34, 0.36, 0.40)),
            ("hot_dog_super.webp", (0.16, 0.40, 0.36, 0.46)),
            ("mini_pizzas_lanche.webp", (0.16, 0.46, 0.36, 0.52)),
            ("coxinha_recheada.webp", (0.16, 0.55, 0.36, 0.61)),
            ("croquete_carne.webp", (0.16, 0.61, 0.36, 0.67)),
            ("espetinho_frango.webp", (0.16, 0.67, 0.36, 0.73)),
            ("risoles_lanche.webp", (0.16, 0.73, 0.36, 0.79)),
            ("salsicha_empanada.webp", (0.16, 0.79, 0.36, 0.85)),
            ("tabua_lanches_destaque.webp", (0.05, 0.85, 0.95, 0.99)),
        ]
    }
]

for cfg in crops_config:
    src_file = os.path.join(SOURCE_DIR, cfg["src"])
    if not os.path.exists(src_file):
        print(f"Aviso: {src_file} não encontrado.")
        continue
    img = Image.open(src_file)
    w, h = img.size
    for out_name, (x1, y1, x2, y2) in cfg["items"]:
        try:
            box = (int(w * x1), int(h * y1), int(w * x2), int(h * y2))
            crop_img = img.crop(box)
            dest = os.path.join(PRODUCTS_DIR, out_name)
            crop_img.save(dest)
            print(f"Salvo produto: {out_name} ({crop_img.size})")
        except Exception as err:
            print(f"Erro em {out_name}: {err}")

print("Concluída extração e organização de imagens!")
