(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`all`,name:`Todos os Produtos`},{id:`pizzas`,name:`Pizzas`},{id:`panificados`,name:`Panificados`},{id:`assados`,name:`Assados & Folhados`},{id:`fritos`,name:`Fritos & Salgados`},{id:`sobremesas`,name:`Sobremesas Prontas`}],t=`/domiraque/`.replace(/\/$/,``),n=e=>`${t}${e.startsWith(`/`)?e:`/`+e}`,r=[{id:`pizza-com-borda-560g`,category:`pizzas`,line:`Linha Pizzas Especiais Dom Iraque`,name:`Pizza com Borda Recheada 560g`,tagline:`Massa crocante, borda generosamente recheada com requeijão cremoso e cobertura farta de ingredientes nobres.`,unitWeight:`560g`,packWeight:`Caixa com 10 Unidades (5,6 Kg)`,image:`/assets/products/pizza_com_borda.webp`,bannerRef:`/assets/banners/catalog_pizzas.webp`,flavors:[`Calabresa Especial`,`Calabresa com Bacon`,`Lombo Canadense com Catupiry`,`Frango com Catupiry`,`Frango com Catupiry e Alho e Óleo`,`Strogonoff de Carne Bovina`,`Baiana com Pimenta Suave`,`Italiana Tradicional`,`Quatro Queijos Selecionados`],ingredients:`Farinha de trigo enriquecida com ferro e ácido fólico, água, queijo muçarela, molho de tomate temperado, requeijão cremoso, óleo vegetal de soja, sal refinado, fermento biológico e orégano.`,allergens:`CONTÉM DERIVADOS DE TRIGO, LEITE E SOJA. PODE CONTER CEVADA E CENTEIO. CONTÉM GLÚTEN. CONTÉM LACTOSE.`,conservation:{freezer:`Freezer (-18°C a -12°C)`,freezerTime:`180 dias (conforme data da embalagem)`,congelador:`Congelador (-10°C a -8°C)`,congeladorTime:`60 dias em embalagem fechada`,geladeira:`Geladeira (+4°C a +8°C)`,geladeiraTime:`Consumir em até 24 horas após descongelamento`,warning:`Uma vez descongelado, este produto não deve ser congelado novamente.`},preparation:{method:`Forno Elétrico ou Forno a Gás`,temp:`200°C a 220°C`,time:`12 a 15 minutos`,steps:[`Pré-aqueça o forno à temperatura de 200°C por aproximadamente 10 minutos.`,`Retire a pizza da embalagem plástica protetora ainda congelada.`,`Coloque a pizza diretamente sobre a grelha ou assadeira untada.`,`Asse por 12 a 15 minutos até que o queijo esteja completamente derretido e a borda dourada.`]},nutrition:{servingSize:`100g (aprox. 1 fatia)`,calories:`248 kcal = 1041 kJ (12% VD)`,carbs:`28g (9% VD)`,proteins:`11g (15% VD)`,totalFat:`10g (18% VD)`,saturatedFat:`4,5g (20% VD)`,sodium:`480mg (20% VD)`},highlights:[`Borda alta volumosa com recheio cremoso`,`Embalagem industrial com filme selado protetor`,`Alto apelo visual e excelente margem de revenda`,`Padronização rigorosa de peso em cada lote`]},{id:`pizza-sem-borda-500g`,category:`pizzas`,line:`Linha Pizzas Tradicionais Dom Iraque`,name:`Pizza sem Borda 500g`,tagline:`Massa clássica fina de fermentação natural, molho artesanal de tomates selecionados e cobertura distribuída até a extremidade.`,unitWeight:`500g`,packWeight:`Caixa com 10 Unidades (5,0 Kg)`,image:`/assets/products/pizza_sem_borda.webp`,bannerRef:`/assets/banners/catalog_pizzas.webp`,flavors:[`Calabresa`,`Calabresa e Bacon`,`Lombo Canadense com Catupiry`,`Frango com Catupiry`,`Frango com Alho e Óleo`,`Strogonoff de Carne`,`Baiana`,`Italiana`,`4 Queijos`,`Prestígio`,`Nega Maluca`,`Dois Amores`,`Confetes`],ingredients:`Farinha de trigo selecionada, água, queijo muçarela de primeira linha, molho de tomate rústico, proteína animal conforme sabor, azeite de oliva, sal e orégano.`,allergens:`CONTÉM DERIVADOS DE TRIGO E LEITE. CONTÉM GLÚTEN. CONTÉM LACTOSE.`,conservation:{freezer:`Freezer (-18°C)`,freezerTime:`180 dias`,congelador:`Congelador (-10°C)`,congeladorTime:`60 dias`,geladeira:`Geladeira (+4°C a +8°C)`,geladeiraTime:`24 horas`,warning:`Uma vez descongelado, não recongelar.`},preparation:{method:`Forno Pré-aquecido`,temp:`200°C`,time:`10 a 14 minutos`,steps:[`Aqueça o forno a 200°C por 10 minutos.`,`Remova o filme selado e leve a pizza congelada ao forno.`,`Aguarde de 10 a 14 minutos até o borbulhar do queijo.`,`Sirva em seguida crocante e quente.`]},nutrition:{servingSize:`100g (1 fatia)`,calories:`235 kcal (12% VD)`,carbs:`27g (9% VD)`,proteins:`10,5g (14% VD)`,totalFat:`9,2g (17% VD)`,saturatedFat:`4,1g (19% VD)`,sodium:`460mg (19% VD)`},highlights:[`Recheio generoso cobrindo toda a superfície`,`Opções salgadas e doces para sobremesa`,`Rápido aquecimento e alta rotação em gôndola`]},{id:`pizza-individual-350g`,category:`pizzas`,line:`Linha Conveniência e Porções Individuais`,name:`Pizza Individual 350g`,tagline:`A porção individual ideal para lanches rápidos, rotisserias, lojas de conveniência e buffets.`,unitWeight:`350g`,packWeight:`Caixa com 12 Unidades (4,2 Kg)`,image:`/assets/products/pizza_individual.webp`,bannerRef:`/assets/banners/catalog_pizzas.webp`,flavors:[`Calabresa`,`Frango com Catupiry`,`4 Queijos`,`Bacon`,`Nega Maluca`,`Prestígio`,`Dois Amores`],ingredients:`Farinha de trigo, água, muçarela, molho de tomate especial, recheio conforme a variedade, sal e levedura.`,allergens:`CONTÉM GLÚTEN. CONTÉM DERIVADOS DE TRIGO E LEITE.`,conservation:{freezer:`Freezer (-18°C)`,freezerTime:`180 dias`,congelador:`Congelador (-10°C)`,congeladorTime:`60 dias`,geladeira:`Geladeira (+4°C)`,geladeiraTime:`24 horas`,warning:`Não recongelar após descongelamento total.`},preparation:{method:`Forno ou Airfryer`,temp:`190°C`,time:`8 a 10 minutos`,steps:[`Sem descongelar, insira na cesta da Airfryer ou forma de forno.`,`Ajuste para 190°C e deixe aquecer por 8 a 10 minutos.`,`Retire com auxílio de espátula e sirva.`]},nutrition:{servingSize:`100g`,calories:`240 kcal`,carbs:`26g`,proteins:`10g`,totalFat:`9g`,saturatedFat:`3,8g`,sodium:`440mg`},highlights:[`Preparo instantâneo em menos de 10 minutos`,`Consumo individual prático`,`Embalagem flowpack moderna`]},{id:`pao-frances-congelado`,category:`panificados`,line:`Linha Panificação Industrial e Padaria`,name:`Pão Francês Congelado Cru (6-8, 10-12, Mini e Integral)`,tagline:`O consagrado pão francês com fermentação de alto padrão, casca dourada e quebradiça com miolo macio e uniforme.`,unitWeight:`75g ou 35g`,packWeight:`Caixa Master de 3 Kg (aprox. 40 a 85 unidades)`,image:`/assets/products/pao_frances.webp`,bannerRef:`/assets/banners/catalog_panificados.webp`,flavors:[`Pão Francês Tradicional 6-8 (75g)`,`Pão Francês Longo 10-12 (75g)`,`Mini Pão Francês para Buffet (35g)`,`Pão Francês Integral com Fibras (75g)`],ingredients:`Farinha de trigo especial com alto teor proteico, água mineral, sal marinho, leveduras vivas de panificação e melhorador natural de farinha.`,allergens:`CONTÉM TRIGO. PODE CONTER DERIVADOS DE SOJA E CENTEIO. CONTÉM GLÚTEN.`,conservation:{freezer:`Freezer (-18°C ou mais frio)`,freezerTime:`90 dias em embalagem original selada`,congelador:`Congelador (-12°C)`,congeladorTime:`30 dias`,geladeira:`Não recomendado estocar descongelado sem assar`,geladeiraTime:`Assar após fermentação`,warning:`Manter sempre a cadeia do frio a -18°C até o momento de fermentar.`},preparation:{method:`Fermentação e Forno Turbo com Vapor`,temp:`190°C com injeção de vapor`,time:`15 a 18 minutos`,steps:[`Distribua os pães congelados nas esteiras perfuradas mantendo espaçamento de 4 cm.`,`Deixe descongelar e fermentar na câmara climática ou em ambiente fechado por 2h a 3h até triplicar de volume.`,`Realize o corte pestana com lâmina afiada.`,`Asse no forno turbo pré-aquecido a 190°C com 10 segundos de vapor por 16 a 18 minutos.`]},nutrition:{servingSize:`50g (1 unidade)`,calories:`135 kcal (7% VD)`,carbs:`28g (9% VD)`,proteins:`4,2g (6% VD)`,totalFat:`0,6g (1% VD)`,saturatedFat:`0,1g (1% VD)`,sodium:`290mg (12% VD)`},highlights:[`Zero desperdício: asse apenas a demanda de cada hora`,`Salto de forno excelente e padronizado em todas as fornadas`,`Redução comprovada de mão de obra e custos na padaria`]},{id:`pao-cervejinha`,category:`panificados`,line:`Linha Panificação Colonial & Gourmet`,name:`Pão Cervejinha Artesanal (Tradicional, Linhaça e Milho)`,tagline:`Pão nobre de crosta dourada e crocante, textura rústica e sabor inconfundível para cafés da manhã e sanduíches gourmet.`,unitWeight:`75g`,packWeight:`Pacote de 3 Kg`,image:`/assets/products/pao_cervejinha.webp`,bannerRef:`/assets/banners/catalog_panificados.webp`,flavors:[`Pão Cervejinha Tradicional`,`Pão Cervejinha Integral com Linhaça Dourada`,`Pão Cervejinha de Farinha de Milho Especial`],ingredients:`Farinha de trigo selecionada, água, gordura vegetal nobre, açúcares naturais, sal, sementes de linhaça ou milho e levedura.`,allergens:`CONTÉM GLÚTEN. CONTÉM DERIVADOS DE TRIGO.`,conservation:{freezer:`Freezer (-18°C)`,freezerTime:`90 dias`,congelador:`Congelador (-10°C)`,congeladorTime:`30 dias`,geladeira:`Não aplicável para massa crua`,geladeiraTime:`Assar após fermentação`,warning:`Não recongelar.`},preparation:{method:`Forno Turbo ou Lastro`,temp:`180°C a 190°C`,time:`15 a 18 minutos`,steps:[`Acomode na assadeira e aguarde a fermentação natural.`,`Asse a 180°C até atingir coloração dourada uniforme.`,`Resfrie sobre esteira antes de embalar para revenda.`]},nutrition:{servingSize:`50g`,calories:`140 kcal`,carbs:`27g`,proteins:`4,5g`,totalFat:`1,2g`,saturatedFat:`0,3g`,sodium:`280mg`},highlights:[`Visual artesanal que valoriza a vitrine de pães especiais`,`Ideal para hotéis, pousadas e cafés coloniais`,`Excelente elasticidade de miolo`]},{id:`pao-de-queijo-mineiro`,category:`assados`,line:`Linha Tradicional Mineira Dom Iraque`,name:`Pão de Queijo Tradicional Congelado 2 Kg`,tagline:`Receita autêntica elaborada com polvilho especial e queijo curado, resultando em casquinha crocante e miolo puxa-puxa irresistível.`,unitWeight:`20g (festa) / 50g (café) / 90g (lanche) / 100g (jumbo)`,packWeight:`Pacote Industrial de 2 Kg`,image:`/assets/products/pao_de_queijo.webp`,bannerRef:`/assets/banners/catalog_assados_2.webp`,ingredients:`Polvilho doce, queijo curado, ovos pasteurizados, óleo vegetal, água, leite integral em pó e sal refinado.`,allergens:`NÃO CONTÉM GLÚTEN. CONTÉM LEITE E DERIVADOS. CONTÉM OVOS. CONTÉM LACTOSE.`,conservation:{freezer:`Freezer (-18°C)`,freezerTime:`180 dias`,congelador:`Congelador (-10°C)`,congeladorTime:`60 dias`,geladeira:`Geladeira (+4°C)`,geladeiraTime:`Não descongelar antes de assar`,warning:`Asse direto do congelador para o forno quente.`},preparation:{method:`Forno Elétrico, Gás ou Airfryer`,temp:`180°C`,time:`20 a 25 minutos`,steps:[`Pré-aqueça o forno a 180°C.`,`Disponha os pães de queijo congelados mantendo espaço de 2 cm entre eles.`,`Asse por 20 a 25 minutos até dourarem por igual.`,`Não abra o forno durante os primeiros 15 minutos.`]},nutrition:{servingSize:`50g (1 a 2 unidades)`,calories:`155 kcal (8% VD)`,carbs:`22g (7% VD)`,proteins:`3,8g (5% VD)`,totalFat:`6,2g (11% VD)`,saturatedFat:`2,1g (10% VD)`,sodium:`240mg (10% VD)`},highlights:[`Naturalmente sem glúten com queijo curado de verdade`,`4 tamanhos padronizados para festa, lanchonete e cafeteria`,`Estabilidade térmica impecável que não murcha ao esfriar`]},{id:`croissants-nobres`,category:`assados`,line:`Linha Viennoiserie e Folhados Nobres`,name:`Croissants Nobres e Mini Croissants (1 Kg a 1,5 Kg)`,tagline:`Massa folhada de padrão europeu com finíssimas camadas de dobras amantesigadas, textura leve e recheios generosos.`,packWeight:`Pacote de 1 Kg ou 1,5 Kg`,image:`/assets/products/croissants.webp`,bannerRef:`/assets/banners/catalog_assados_1.webp`,flavors:[`Sem Recheio Tradicional Amanteigado (1,5 Kg)`,`Frango Desfiado com Requeijão Cremoso (1,5 Kg)`,`Quatro Queijos Nobres (1,5 Kg)`,`Chocolate ao Leite Cremoso (1,5 Kg)`,`Chocolate Branco Selecionado (1,5 Kg)`,`Mini Croissants Sortidos para Buffet (1 Kg)`],ingredients:`Farinha de trigo, margarina específica para folhados, água, açúcar, ovos, fermento biológico, sal e recheio correspondente.`,allergens:`CONTÉM GLÚTEN. CONTÉM DERIVADOS DE TRIGO E LEITE. PODE CONTER SOJA E NOZES.`,conservation:{freezer:`Freezer (-18°C)`,freezerTime:`120 dias`,congelador:`Congelador (-10°C)`,congeladorTime:`45 dias`,geladeira:`Não aplicável`,geladeiraTime:`Assar congelado`,warning:`Conservar sempre a -18°C.`},preparation:{method:`Forno Turbo ou Lastro`,temp:`180°C`,time:`18 a 22 minutos`,steps:[`Disponha os croissants ainda congelados em assadeira com papel manteiga.`,`Leve ao forno pré-aquecido a 180°C.`,`Asse por 18 a 22 minutos até obter folhagem expandida e dourada.`]},nutrition:{servingSize:`60g`,calories:`220 kcal`,carbs:`24g`,proteins:`4,6g`,totalFat:`11,5g`,saturatedFat:`5,8g`,sodium:`260mg`},highlights:[`Folheado com expansão uniforme e leveza incomparável`,`Ideal para vitrines de cafeterias e serviço de café da manhã`,`Recheios que não vazam na assadeira durante o forneamento`]},{id:`coxinha-lanche-fritos`,category:`fritos`,line:`Linha Salgados de Lanche & Confeitaria Salgada`,name:`Coxinha de Lanche 1,5 Kg (Frango com Requeijão / Costela)`,tagline:`Massa macia à base de caldo artesanal e batata fresca, com casca ultra crocante e recheio farto temperado com ervas naturais.`,unitWeight:`120g a 140g`,packWeight:`Pacote Industrial de 1,5 Kg`,image:`/assets/products/coxinha_lanche.webp`,bannerRef:`/assets/banners/catalog_fritos_mini.webp`,flavors:[`Frango Desfiado com Requeijão Cremoso`,`Costela Bovina Desfiada de Cozimento Lento`],ingredients:`Farinha de trigo, água, peito de frango (ou costela bovina), batata em flocos, requeijão cremoso, óleo vegetal, caldo de galinha, alho, cebola, cheiro-verde e sal.`,allergens:`CONTÉM GLÚTEN. CONTÉM DERIVADOS DE TRIGO E LEITE.`,conservation:{freezer:`Freezer (-18°C)`,freezerTime:`180 dias`,congelador:`Congelador (-10°C)`,congeladorTime:`60 dias`,geladeira:`Não aplicável`,geladeiraTime:`Fritar congelado`,warning:`Não recongelar.`},preparation:{method:`Fritadeira em Óleo ou Airfryer`,temp:`180°C em óleo abundante`,time:`5 a 7 minutos`,steps:[`Aqueça o óleo a 180°C em quantidade suficiente para cobrir os salgados.`,`Mergulhe os salgados ainda congelados aos poucos para não baixar a temperatura do óleo.`,`Frite por 5 a 7 minutos até dourarem.`,`Escorra sobre papel absorvente antes de expor na estufa térmica.`]},nutrition:{servingSize:`100g`,calories:`230 kcal`,carbs:`25g`,proteins:`9,5g`,totalFat:`10,2g`,saturatedFat:`2,8g`,sodium:`410mg`},highlights:[`Crocância externa duradoura que suporta estufa quente sem amolecer`,`Recheio úmido e muito temperado`,`Formato anatômico padronizado para estufas de lanchonete`]},{id:`linha-mini-salgados-festa`,category:`fritos`,line:`Linha Salgados de Festa & Coquetel com Contagem`,name:`Mini Salgados para Festa e Buffet (1 Kg a 2 Kg)`,tagline:`Salgados em tamanho coquetel perfeito com contagem exata no pacote para controle de custo em buffets, festas e eventos corporativos.`,packWeight:`1 Kg a 2 Kg (45 a 80 Unidades exatas por pacote)`,yieldUnits:`45 a 80 unidades por embalagem com contagem na etiqueta`,image:`/assets/products/mini_coxinha.webp`,bannerRef:`/assets/banners/catalog_fritos_mini.webp`,flavors:[`Mini Coxinha de Frango com Requeijão (1 Kg - 45 Unidades)`,`Mini Croquete de Carne Bovina Temperada (1 Kg - 60 Unidades)`,`Mini Bolinha de Requeijão Cremoso (1 Kg - 45 Unidades)`,`Mini Risoles Sortidos de Carne, Frango e Queijo (2 Kg - 65 Unidades)`,`Mini Churros de Doce de Leite Tradicional (2 Kg - 80 Unidades)`],ingredients:`Farinha de trigo, água, recheios selecionados (frango, queijo, carne ou doce de leite), fécula de batata, empanamento crocante e temperos naturais.`,allergens:`CONTÉM GLÚTEN. CONTÉM DERIVADOS DE TRIGO E LEITE.`,conservation:{freezer:`Freezer (-18°C)`,freezerTime:`180 dias`,congelador:`Congelador (-10°C)`,congeladorTime:`60 dias`,geladeira:`Não aplicável`,geladeiraTime:`Fritar direto do freezer`,warning:`Mantenha a embalagem lacrada a -18°C.`},preparation:{method:`Fritadeira em Óleo`,temp:`180°C`,time:`3 a 4 minutos`,steps:[`Aqueça o óleo a 180°C.`,`Coloque os mini salgados ainda congelados na cesta.`,`Frite por apenas 3 a 4 minutos até ficarem bem dourados.`,`Escorra e sirva quente.`]},nutrition:{servingSize:`50g (aprox. 3 a 4 unidades)`,calories:`125 kcal`,carbs:`14g`,proteins:`4,8g`,totalFat:`5,5g`,saturatedFat:`1,5g`,sodium:`210mg`},highlights:[`Contagem exata no pacote para controle de CMV e orçamentos`,`Não estoura durante a fritura com fórmula de fechamento blindado`,`Crocância garantida por horas em réchauds`]},{id:`tortas-finas-confeitaria`,category:`sobremesas`,line:`Linha Sobremesas & Confeitaria Pronta`,name:`Tortas Finas da Confeitaria 700g`,tagline:`Confeitaria sofisticada de padrão internacional pronta para descongelar e fatiar. Reduz tempo e dispensa mão de obra de confeiteiro no seu restaurante.`,unitWeight:`700g (Torta Inteira Rendendo de 8 a 10 fatias)`,packWeight:`Caixa Master com 4 Unidades`,image:`/assets/products/torta_fina.webp`,bannerRef:`/assets/banners/catalog_sobremesas.webp`,flavors:[`Banoffee com Doce de Leite e Banana Fresca`,`Cheesecake com Calda Brilhante de Frutas Vermelhas`,`Duetto de Mousse de Chocolate Meio Amargo e Branco`,`Mousse de Limão Siciliano com Suspiro Tostado`],ingredients:`Leite condensado, creme de leite fresco, biscoito triturado, manteiga, chocolate nobre, frutas selecionadas, gelatina e raspas cítricas.`,allergens:`CONTÉM DERIVADOS DE TRIGO, LEITE E SOJA. PODE CONTER CASTANHAS E NOZES. CONTÉM GLÚTEN. CONTÉM LACTOSE.`,conservation:{freezer:`Freezer (-18°C)`,freezerTime:`180 dias`,congelador:`Congelador (-10°C)`,congeladorTime:`60 dias`,geladeira:`Geladeira (+4°C)`,geladeiraTime:`Até 4 dias após descongelar sob refrigeração`,warning:`Não recongelar após descongelamento.`},preparation:{method:`Descongelamento em Geladeira`,temp:`4°C a 6°C`,time:`2 horas antes do serviço`,steps:[`Transfira a torta da embalagem para a geladeira cerca de 2 horas antes de servir.`,`Fatie com faca lisa aquecida para um corte limpo e apresentação perfeita.`,`Sirva gelada.`]},nutrition:{servingSize:`80g (1 fatia)`,calories:`260 kcal (13% VD)`,carbs:`32g (11% VD)`,proteins:`4,5g (6% VD)`,totalFat:`13g (24% VD)`,saturatedFat:`7,2g (33% VD)`,sodium:`115mg (5% VD)`},highlights:[`Dispensa confeiteiro profissional no seu restaurante`,`Aparência nobre que agrega alto valor à sobremesa no cardápio`,`Descongelamento homogêneo sem liberar líquidos`]},{id:`petit-gateau-pudim`,category:`sobremesas`,line:`Linha Sobremesas Individuais Prontas`,name:`Petit Gâteau 85g e Mini Pudim de Leite Condensado 120g`,tagline:`Clássicos da culinária com textura aveludada e calda brilhante. Preparo instantâneo com zero desperdício para cozinhas comerciais em horários de pico.`,unitWeight:`85g ou 120g`,packWeight:`Petit Gâteau (cx c/ 16 un) / Mini Pudim (cx c/ 9 un)`,image:`/assets/products/petit_gateau.webp`,bannerRef:`/assets/banners/catalog_sobremesas.webp`,flavors:[`Petit Gâteau de Chocolate Belga com Coração Cremoso (85g)`,`Mini Pudim de Leite Condensado com Calda de Caramelo (120g - cx 9 un)`,`Torta de Bolacha Italiana Tradicional (130g)`],ingredients:`Ovos, chocolate meio amargo, manteiga, açúcar, leite condensado integral, leite e farinha de trigo.`,allergens:`CONTÉM GLÚTEN. CONTÉM LACTOSE. CONTÉM LEITE E OVOS.`,conservation:{freezer:`Freezer (-18°C)`,freezerTime:`180 dias`,congelador:`Congelador (-10°C)`,congeladorTime:`60 dias`,geladeira:`Geladeira (+4°C)`,geladeiraTime:`Mini Pudim pronto para servir gelado`,warning:`Manter sempre sob refrigeração ou congelamento.`},preparation:{method:`Micro-ondas ou Forno Elétrico`,temp:`Micro-ondas (potência média) ou Forno a 180°C`,time:`35 a 45 segundos (micro-ondas)`,steps:[`Para o Petit Gâteau: aqueça no micro-ondas por 35 a 45 segundos até que o centro amoleça.`,`Para o Mini Pudim: basta desenformar diretamente no prato de sobremesa com sua calda de caramelo.`,`Acompanhe com bola de sorvete de creme ou folhas de hortelã.`]},nutrition:{servingSize:`85g (1 unidade)`,calories:`290 kcal (15% VD)`,carbs:`34g (11% VD)`,proteins:`4,8g (6% VD)`,totalFat:`15g (27% VD)`,saturatedFat:`8,5g (39% VD)`,sodium:`90mg (4% VD)`},highlights:[`Vulcão de chocolate nobre que escorre na primeira colherada`,`Pudim sem furinhos com textura sedosa e caramelização dourada`,`Agilidade extrema: sobremesa montada e servida em 1 minuto`]}].map(e=>({...e,image:n(e.image),bannerRef:n(e.bannerRef)})),i=[{id:`mercearia-de-marco-gramado`,name:`Mercearia De Marco`,city:`Gramado`,state:`RS`,address:`Av. Borges de Medeiros, 2889 - Loja 111 - Centro`,phone:`(54) 3286-9400`,lat:-29.3773,lng:-50.875,productIds:r.map(e=>e.id),active:!0},{id:`atacadao-de-sorvetes-gramado`,name:`Atacadão De Sorvetes Gramado`,city:`Gramado`,state:`RS`,address:`Rua Euzébio Balzaretti, 585 - Sala 01 - Centro`,phone:`(54) 3286-1561`,lat:-29.3753,lng:-50.8779,productIds:[`pizza-com-borda-560g`,`pizza-sem-borda-500g`,`pizza-individual-350g`,`tortas-finas-confeitaria`,`petit-gateau-pudim`],active:!0},{id:`mercado-pousada-da-neve-np`,name:`Mercado e Padaria Pousada da Neve`,city:`Nova Petrópolis`,state:`RS`,address:`Rua Farroupilha, 120 - Pousada da Neve`,phone:`(54) 3281-3000`,lat:-29.3702,lng:-51.1205,productIds:[`pao-frances-congelado`,`pao-cervejinha`,`pao-de-queijo-mineiro`,`pizza-sem-borda-500g`],active:!0},{id:`supermercado-serra-sul-np`,name:`Supermercado Serra Sul`,city:`Nova Petrópolis`,state:`RS`,address:`Av. 15 de Novembro, 1400 - Centro`,phone:`(54) 3281-2200`,lat:-29.3636,lng:-51.1147,productIds:r.map(e=>e.id),active:!0},{id:`emporio-canela`,name:`Empório & Mercearia Canela`,city:`Canela`,state:`RS`,address:`Rua Osvaldo Aranha, 350 - Centro`,phone:`(54) 3282-1500`,lat:-29.3644,lng:-50.8118,productIds:r.map(e=>e.id),active:!0},{id:`supermercado-caxias-gourmet`,name:`Supermercado Caxias Gourmet`,city:`Caxias do Sul`,state:`RS`,address:`Rua Sinimbu, 2100 - Centro`,phone:`(54) 3220-8000`,lat:-29.1678,lng:-51.1794,productIds:[`pizza-com-borda-560g`,`pizza-sem-borda-500g`,`linha-mini-salgados-festa`,`coxinha-lanche-fritos`],active:!0}];function a(e,t,n,r){let i=e=>e*Math.PI/180,a=i(n-e),o=i(r-t),s=Math.sin(a/2)**2+Math.cos(i(e))*Math.cos(i(n))*Math.sin(o/2)**2;return 12742*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))}async function o(e,t){if(!e)throw Error(`Produto inválido.`);try{let n=await fetch(`https://southamerica-east1-dom-iraque-pizzaria.cloudfunctions.net/checkProductAvailability`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({data:{productId:e,...t}})});if(n.ok){let e=await n.json();if(!e.error&&typeof e.result?.available==`boolean`)return{available:e.result.available,...e.result.available&&Number.isFinite(e.result.distanceKm)?{distanceKm:e.result.distanceKm}:{}}}}catch{}let n=1/0,r=i.filter(t=>t.active&&t.productIds.includes(e));for(let e of r){let r=a(t.lat,t.lng,e.lat,e.lng);r<=50&&r<n&&(n=r)}return Number.isFinite(n)?{available:!0,distanceKm:Math.max(1,Math.round(n))}:{available:!1}}var s=`AIzaSyC4Ad-fSNyq2y9ceeZ24YwyW0qpJUAVD2A`,c=`https://southamerica-east1-dom-iraque-pizzaria.cloudfunctions.net`,l=`dom_iraque_admin_session`;function u(){try{let e=sessionStorage.getItem(l);return e?JSON.parse(e):null}catch{return null}}async function d(e,t){let n=await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${s}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:e,password:t,returnSecureToken:!0})}),r=await n.json();if(!n.ok||r.error){let e=r.error?.message;throw Error(e===`EMAIL_NOT_FOUND`||e===`INVALID_PASSWORD`||e===`INVALID_LOGIN_CREDENTIALS`?`E-mail ou senha incorretos.`:r.error?.message||`Falha ao autenticar.`)}let i=await f(r.idToken,r.email,r.localId);return sessionStorage.setItem(l,JSON.stringify(i)),i}async function f(e,t,n){let r=(await(await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${s}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({idToken:e})})).json()).users?.[0],i={};if(r?.customAttributes)try{i=JSON.parse(r.customAttributes)}catch{i={}}if(i.admin!==!0)throw Error(`Este usuário não possui permissão de Administrador da Dom Iraque.`);return{email:t,uid:n,idToken:e,isAdmin:!0}}function p(){sessionStorage.removeItem(l)}async function m(e,t={}){let n=u();if(!n?.idToken)throw Error(`Você precisa estar autenticado como Administrador.`);let r=`${c}/${e}`,i=await fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${n.idToken}`},body:JSON.stringify({data:t})}),a=await i.json();if(!i.ok||a.error)throw Error(a.error?.message||`Falha na operação ${e}`);return a.result}async function h(){return(await m(`listPartnerEstablishments`)).partners||[]}async function g(e){return await m(`upsertPartnerEstablishment`,e)}async function _(e,t){return await m(`setPartnerEstablishmentActive`,{id:e,active:t})}async function v(e){return await m(`deletePartnerEstablishment`,{id:e})}var y=`lista`,b=null,x=[],S=!1,C=``,w=``;function T(){return window.location.hash.startsWith(`#admin`)}function E(){let e=u();return e?O(e.email):D()}function D(){return`
    <div class="min-h-screen bg-gradient-to-br from-[#171717] to-gray-900 flex items-center justify-center p-4">
      <div class="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100">
        <div class="text-center mb-8">
          <a href="#inicio" class="inline-block mb-4">
            <img src="/assets/brand/logo_hd.png" alt="Dom Iraque" class="h-14 mx-auto object-contain" />
          </a>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider mb-2">
            🔒 Acesso Administrativo
          </span>
          <h2 class="text-2xl font-black text-brand-black">Painel de Parceiros</h2>
          <p class="text-xs text-gray-500 mt-1">Gestão segura de pontos de venda e parceiros credenciados</p>
        </div>

        ${C?`
          <div class="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
            <span>⚠️</span> ${C}
          </div>
        `:``}

        <form id="admin-login-form" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1">E-mail do Administrador</label>
            <input 
              type="email" 
              id="admin-email-input" 
              required 
              placeholder="seu-email@domiraque.com.br"
              class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-sm focus:border-brand-red focus:bg-white focus:outline-none transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1">Senha de Acesso</label>
            <input 
              type="password" 
              id="admin-password-input" 
              required 
              placeholder="••••••••"
              class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-sm focus:border-brand-red focus:bg-white focus:outline-none transition-all"
            />
          </div>

          <button 
            type="submit" 
            id="admin-login-btn"
            class="w-full py-3.5 px-6 rounded-xl font-bold btn-primary text-white text-sm shadow-lg hover:shadow-xl transition-all"
          >
            Entrar no Painel Seguro
          </button>
        </form>

        <div class="mt-6 pt-6 border-t border-gray-100 text-center">
          <a href="#inicio" class="text-xs font-bold text-gray-500 hover:text-brand-red transition-colors inline-flex items-center gap-1">
            ← Voltar para o Site Oficial
          </a>
        </div>
      </div>
    </div>
  `}function O(e){let t=x.filter(e=>e.active).length;return`
    <div class="min-h-screen bg-gray-50 flex flex-col">
      <!-- Barra Superior do Administrador -->
      <header class="bg-brand-black text-white px-4 sm:px-8 py-3.5 border-b border-gray-800 sticky top-0 z-30 shadow-md">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <div class="flex items-center gap-4">
            <a href="#inicio" title="Ir para a Home">
              <img src="/assets/brand/logo_hd.png" alt="Dom Iraque" class="h-9 w-auto object-contain brightness-0 invert" />
            </a>
            <div class="h-5 w-px bg-gray-700 hidden sm:block"></div>
            <div>
              <span class="text-xs font-bold text-brand-wheat block">Painel Administrativo Dom Iraque</span>
              <span class="text-[11px] text-gray-400">Gestão Privada de Estabelecimentos</span>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <span class="text-xs text-gray-300 hidden md:inline">Logado como: <strong>${e}</strong></span>
            <a href="#inicio" class="text-xs text-gray-300 hover:text-white underline">Ver Site</a>
            <button id="admin-logout-btn" class="py-1.5 px-3 rounded-lg text-xs font-bold bg-gray-800 hover:bg-red-700 text-white transition-colors">
              Sair
            </button>
          </div>
        </div>
      </header>

      <!-- Conteúdo Principal -->
      <main class="max-w-7xl mx-auto px-4 sm:px-8 py-8 flex-1 w-full">
        
        <!-- Feedback Messages -->
        ${C?`
          <div class="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-sm font-semibold flex items-center justify-between">
            <div class="flex items-center gap-2"><span>⚠️</span> ${C}</div>
            <button class="close-alert-btn text-xs font-bold text-red-600 hover:underline">Fechar</button>
          </div>
        `:``}

        ${w?`
          <div class="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center justify-between">
            <div class="flex items-center gap-2"><span>✅</span> ${w}</div>
            <button class="close-alert-btn text-xs font-bold text-emerald-600 hover:underline">Fechar</button>
          </div>
        `:``}

        <!-- Cards de Resumo -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div class="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <span class="text-xs font-semibold text-gray-500 uppercase">Total Cadastrado</span>
              <div class="text-2xl font-black text-brand-black mt-1">${x.length}</div>
            </div>
            <div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl">🏬</div>
          </div>

          <div class="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <span class="text-xs font-semibold text-gray-500 uppercase">Ativos para Consulta GPS</span>
              <div class="text-2xl font-black text-emerald-600 mt-1">${t}</div>
            </div>
            <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">📍</div>
          </div>

          <div class="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <span class="text-xs font-semibold text-gray-500 uppercase">Segurança de Dados</span>
              <div class="text-sm font-bold text-emerald-600 mt-1 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Firestore Privado
              </div>
            </div>
            <div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl">🛡️</div>
          </div>
        </div>

        <!-- Abas do Painel -->
        <div class="flex items-center justify-between border-b border-gray-200 pb-3 mb-6">
          <div class="flex gap-2">
            <button 
              id="admin-tab-lista-btn"
              class="py-2.5 px-5 rounded-xl font-bold text-xs sm:text-sm transition-all ${y===`lista`?`btn-primary text-white shadow-sm`:`bg-white text-gray-700 hover:bg-gray-100 border border-gray-200`}"
            >
              📋 Estabelecimentos Cadastrados (${x.length})
            </button>
            <button 
              id="admin-tab-novo-btn"
              class="py-2.5 px-5 rounded-xl font-bold text-xs sm:text-sm transition-all ${y===`novo`?`btn-primary text-white shadow-sm`:`bg-white text-gray-700 hover:bg-gray-100 border border-gray-200`}"
            >
              ${b?`✏️ Editando Estabelecimento`:`+ Cadastrar Novo Estabelecimento`}
            </button>
          </div>

          ${x.length===0&&!S?`
            <button 
              id="admin-seed-btn" 
              class="py-2 px-3.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white shadow-sm flex items-center gap-1.5 transition-all"
            >
              🚀 Importar os 12 Estabelecimentos Iniciais
            </button>
          `:``}
        </div>

        <!-- Conteúdo das Abas -->
        ${y===`novo`?k():A()}

      </main>
    </div>
  `}function k(){let e=b,t=new Set(e?.productIds||[]);return`
    <div class="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm max-w-4xl">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h3 class="text-xl font-black text-brand-black">
            ${e?`Editar Parceiro: ${e.name}`:`Cadastrar Novo Parceiro Comercial`}
          </h3>
          <p class="text-xs text-gray-500 mt-1">
            Preencha os dados e selecione quais produtos da Dom Iraque este estabelecimento recebe.
          </p>
        </div>
        ${e?`
          <button id="cancel-edit-btn" class="py-2 px-4 rounded-xl text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700">
            Cancelar Edição
          </button>
        `:``}
      </div>

      <form id="partner-form" class="space-y-6">
        <input type="hidden" id="partner-id" value="${e?.id||``}" />

        <!-- BLOCO DE PREENCHIMENTO RÁPIDO AUTOMÁTICO (GOOGLE MAPS + CEP) -->
        <div class="p-5 rounded-2xl bg-gradient-to-r from-red-50/80 via-white to-amber-50/70 border border-red-200/80 shadow-xs">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-base">⚡</span>
            <span class="text-xs font-black uppercase tracking-wider text-brand-red">
              Preenchimento Rápido com Google Maps ou CEP
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
            <!-- Colar Link do Google Maps -->
            <div class="md:col-span-7">
              <label class="block text-[11px] font-bold text-gray-700 mb-1">
                📍 Colar Link do Google Maps (Extrai Nome e Coordenadas GPS)
              </label>
              <div class="flex gap-2">
                <input 
                  type="text" 
                  id="quick-maps-input" 
                  placeholder="Cole o link do Google Maps aqui..."
                  class="flex-1 px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs bg-white focus:border-brand-red focus:outline-none"
                />
                <button 
                  type="button" 
                  id="quick-maps-btn"
                  class="py-2.5 px-4 rounded-xl font-bold bg-brand-black hover:bg-gray-800 text-white text-xs whitespace-nowrap shadow-xs transition-colors"
                >
                  Extrair Dados
                </button>
              </div>
            </div>

            <!-- Buscar pelo CEP -->
            <div class="md:col-span-5">
              <label class="block text-[11px] font-bold text-gray-700 mb-1">
                📮 Buscar pelo CEP (Preenche Endereço e Cidade)
              </label>
              <div class="flex gap-2">
                <input 
                  type="text" 
                  id="quick-cep-input" 
                  maxlength="9"
                  placeholder="Ex: 01310-100"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs bg-white focus:border-brand-red focus:outline-none"
                />
                <button 
                  type="button" 
                  id="quick-cep-btn"
                  class="py-2.5 px-4 rounded-xl font-bold btn-primary text-white text-xs whitespace-nowrap shadow-xs transition-colors"
                >
                  Buscar CEP
                </button>
              </div>
            </div>
          </div>

          <div id="quick-feedback" class="hidden mt-3 text-xs font-semibold p-2.5 rounded-xl"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1">Nome Fantasia do Estabelecimento *</label>
            <input 
              type="text" 
              id="partner-name" 
              required 
              value="${e?.name||``}"
              placeholder="Ex: Supermercado Central"
              class="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-brand-red focus:outline-none"
            />
          </div>

          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1">Telefone / WhatsApp Comercial</label>
            <input 
              type="text" 
              id="partner-phone" 
              value="${e?.phone||``}"
              placeholder="(54) 98404-9311"
              class="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-brand-red focus:outline-none"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div class="sm:col-span-6">
            <label class="block text-xs font-bold text-gray-700 mb-1">Endereço Completo (Rua e Número) *</label>
            <input 
              type="text" 
              id="partner-address" 
              required 
              value="${e?.address||``}"
              placeholder="Ex: Av. Paulista, 1000 - Bela Vista"
              class="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-brand-red focus:outline-none"
            />
          </div>

          <div class="sm:col-span-4">
            <label class="block text-xs font-bold text-gray-700 mb-1">Cidade *</label>
            <input 
              type="text" 
              id="partner-city" 
              required 
              value="${e?.city||`São Paulo`}"
              placeholder="São Paulo"
              class="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-brand-red focus:outline-none"
            />
          </div>

          <div class="sm:col-span-2">
            <label class="block text-xs font-bold text-gray-700 mb-1">Estado *</label>
            <input 
              type="text" 
              id="partner-state" 
              required 
              maxlength="2" 
              value="${e?.state||`SP`}"
              placeholder="SP"
              class="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm uppercase focus:border-brand-red focus:outline-none text-center font-bold"
            />
          </div>
        </div>

        <!-- Coordenadas Geográficas (GPS) -->
        <div class="p-4 rounded-2xl bg-gray-50 border border-gray-200">
          <div class="flex items-center justify-between mb-3">
            <div>
              <span class="text-xs font-bold text-brand-black block">Coordenadas de Localização (GPS)</span>
              <span class="text-[11px] text-gray-500">Usadas para calcular a distância ao consumidor no site</span>
            </div>
            <button 
              type="button" 
              id="get-current-gps-btn"
              class="py-1 px-3 rounded-lg text-xs font-semibold bg-white border border-gray-300 hover:border-brand-red text-gray-700"
            >
              📍 Usar Meu GPS Atual
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-[11px] font-semibold text-gray-600 mb-1">Latitude (Lat) *</label>
              <input 
                type="number" 
                step="any" 
                id="partner-lat" 
                required 
                value="${e?.lat||`-23.5505`}"
                class="w-full px-4 py-2 rounded-xl border border-gray-300 text-sm focus:border-brand-red focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-[11px] font-semibold text-gray-600 mb-1">Longitude (Lng) *</label>
              <input 
                type="number" 
                step="any" 
                id="partner-lng" 
                required 
                value="${e?.lng||`-46.6333`}"
                class="w-full px-4 py-2 rounded-xl border border-gray-300 text-sm focus:border-brand-red focus:outline-none"
              />
            </div>
          </div>
        </div>

        <!-- Vínculo com Produtos do Catálogo -->
        <div>
          <div class="flex items-center justify-between mb-3">
            <div>
              <span class="text-xs font-bold text-brand-black block">Produtos Disponíveis neste Estabelecimento *</span>
              <span class="text-[11px] text-gray-500">Marque quais itens da Dom Iraque são vendidos aqui</span>
            </div>
            <div class="flex gap-2">
              <button type="button" id="select-all-products-btn" class="text-xs text-brand-red font-bold hover:underline">
                Selecionar Todos
              </button>
              <span class="text-gray-300">|</span>
              <button type="button" id="clear-all-products-btn" class="text-xs text-gray-500 font-bold hover:underline">
                Limpar
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-72 overflow-y-auto p-3 border border-gray-200 rounded-2xl bg-gray-50">
            ${r.map(e=>`
              <label class="flex items-center gap-3 p-2.5 bg-white rounded-xl border border-gray-200 hover:border-brand-red cursor-pointer transition-colors shadow-2xs">
                <input 
                  type="checkbox" 
                  name="product-checkbox" 
                  value="${e.id}" 
                  ${t.has(e.id)||t.has(`all`)?`checked`:``}
                  class="rounded text-brand-red focus:ring-brand-red w-4 h-4 cursor-pointer"
                />
                <img src="${e.image}" alt="${e.name}" class="w-8 h-8 object-contain shrink-0" />
                <div class="min-w-0">
                  <span class="text-xs font-bold text-gray-800 block truncate">${e.name}</span>
                  <span class="text-[10px] text-gray-500">${e.packWeight}</span>
                </div>
              </label>
            `).join(``)}
          </div>
        </div>

        <!-- Status do Cadastro -->
        <div class="flex items-center gap-3 pt-2">
          <input 
            type="checkbox" 
            id="partner-active" 
            ${e?e.active?`checked`:``:`checked`}
            class="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
          />
          <label for="partner-active" class="text-xs font-bold text-gray-700 cursor-pointer">
            Ativo (participa das consultas de raio por GPS no site)
          </label>
        </div>

        <div class="pt-4 border-t border-gray-100 flex gap-3">
          <button 
            type="submit" 
            id="save-partner-submit-btn"
            class="py-3 px-8 rounded-xl font-bold btn-primary text-white text-sm shadow-md transition-all flex items-center gap-2"
          >
            <span>💾</span> ${e?`Salvar Alterações`:`Cadastrar Estabelecimento`}
          </button>
        </div>
      </form>
    </div>
  `}function A(){return S?`
      <div class="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm">
        <div class="w-10 h-10 border-4 border-brand-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-sm font-bold text-gray-700">Carregando parceiros do Firestore...</p>
      </div>
    `:x.length===0?`
      <div class="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm">
        <div class="text-4xl mb-3">📍</div>
        <h4 class="text-lg font-bold text-brand-black">Nenhum parceiro cadastrado ainda</h4>
        <p class="text-xs text-gray-500 mt-1 max-w-md mx-auto">
          Você pode cadastrar um estabelecimento manualmente ou importar os 12 parceiros de demonstração para testar as consultas de GPS.
        </p>
        <div class="mt-6 flex justify-center gap-3">
          <button id="empty-novo-btn" class="py-2.5 px-5 rounded-xl font-bold btn-primary text-xs text-white">
            + Cadastrar Primeiro Parceiro
          </button>
          <button id="empty-seed-btn" class="py-2.5 px-5 rounded-xl font-bold bg-amber-500 hover:bg-amber-600 text-xs text-white">
            🚀 Importar os 12 Iniciais
          </button>
        </div>
      </div>
    `:`
    <div class="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-gray-50 border-b border-gray-200 text-gray-600 font-bold uppercase tracking-wider text-[11px]">
            <tr>
              <th class="py-4 px-6">Estabelecimento</th>
              <th class="py-4 px-6">Localização</th>
              <th class="py-4 px-6">Produtos Vinculados</th>
              <th class="py-4 px-6">Status GPS</th>
              <th class="py-4 px-6 text-right">Ações</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            ${x.map(e=>`
              <tr class="hover:bg-gray-50/80 transition-colors">
                <td class="py-4 px-6">
                  <div class="font-bold text-brand-black text-sm">${e.name}</div>
                  <div class="text-gray-500 text-[11px]">${e.phone||`Sem telefone`}</div>
                </td>
                <td class="py-4 px-6">
                  <div class="text-gray-800 font-medium">${e.address}</div>
                  <div class="text-gray-500 text-[11px]">${e.city} - ${e.state} (${e.lat.toFixed(4)}, ${e.lng.toFixed(4)})</div>
                </td>
                <td class="py-4 px-6">
                  <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-50 text-brand-red border border-red-100">
                    📦 ${e.productIds?.length||0} produto(s)
                  </span>
                </td>
                <td class="py-4 px-6">
                  <button 
                    data-toggle-id="${e.id}" 
                    data-active="${e.active}"
                    class="toggle-status-btn inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-[11px] transition-colors ${e.active?`bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100`:`bg-gray-100 text-gray-600 hover:bg-gray-200`}"
                  >
                    <span class="w-2 h-2 rounded-full ${e.active?`bg-emerald-500`:`bg-gray-400`}"></span>
                    ${e.active?`Ativo`:`Pausado`}
                  </button>
                </td>
                <td class="py-4 px-6 text-right">
                  <div class="flex items-center justify-end gap-2">
                    <button 
                      data-edit-id="${e.id}"
                      class="edit-partner-btn p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold"
                      title="Editar"
                    >
                      ✏️
                    </button>
                    <button 
                      data-delete-id="${e.id}"
                      data-name="${e.name}"
                      class="delete-partner-btn p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-semibold"
                      title="Excluir"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </div>
    </div>
  `}function j(e){document.getElementById(`admin-login-form`)?.addEventListener(`submit`,async t=>{t.preventDefault(),C=``;let n=document.getElementById(`admin-email-input`)?.value,r=document.getElementById(`admin-password-input`)?.value,i=document.getElementById(`admin-login-btn`);i&&(i.setAttribute(`disabled`,`true`),i.innerHTML=`Verificando credenciais...`);try{await d(n,r),await M(),e()}catch(t){C=t.message||`Falha ao realizar login.`,e()}}),document.getElementById(`admin-logout-btn`)?.addEventListener(`click`,()=>{p(),x=[],y=`lista`,b=null,e()}),document.querySelectorAll(`.close-alert-btn`).forEach(t=>{t.addEventListener(`click`,()=>{C=``,w=``,e()})}),document.getElementById(`admin-tab-lista-btn`)?.addEventListener(`click`,()=>{y=`lista`,b=null,e()}),document.getElementById(`admin-tab-novo-btn`)?.addEventListener(`click`,()=>{y=`novo`,e()}),document.getElementById(`empty-novo-btn`)?.addEventListener(`click`,()=>{y=`novo`,e()}),document.getElementById(`cancel-edit-btn`)?.addEventListener(`click`,()=>{b=null,y=`lista`,e()}),document.getElementById(`select-all-products-btn`)?.addEventListener(`click`,()=>{document.querySelectorAll(`input[name="product-checkbox"]`).forEach(e=>e.checked=!0)}),document.getElementById(`clear-all-products-btn`)?.addEventListener(`click`,()=>{document.querySelectorAll(`input[name="product-checkbox"]`).forEach(e=>e.checked=!1)}),document.getElementById(`get-current-gps-btn`)?.addEventListener(`click`,()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(e=>{let t=document.getElementById(`partner-lat`),n=document.getElementById(`partner-lng`);t&&(t.value=e.coords.latitude.toFixed(6)),n&&(n.value=e.coords.longitude.toFixed(6))})}),document.getElementById(`quick-maps-btn`)?.addEventListener(`click`,async()=>{let e=document.getElementById(`quick-maps-input`)?.value.trim(),t=document.getElementById(`quick-feedback`);if(!e)return;let n=!1,r=!1,i=e.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/),a=e.match(/[?&](?:q|ll)=(-?\d+\.\d+),(-?\d+\.\d+)/),o=e.match(/(-?\d{1,2}\.\d{3,}),\s*(-?\d{1,3}\.\d{3,})/),s=i||a||o;if(s){let e=document.getElementById(`partner-lat`),t=document.getElementById(`partner-lng`);e&&(e.value=parseFloat(s[1]).toFixed(6)),t&&(t.value=parseFloat(s[2]).toFixed(6)),n=!0}let c=e.match(/\/place\/([^/@?]+)/);if(c)try{let e=decodeURIComponent(c[1].replace(/\+/g,` `)),t=document.getElementById(`partner-name`);t&&(t.value=e,r=!0)}catch(e){console.error(e)}if(!r&&e.includes(`http`)){let t=e.split(`http`)[0].trim().replace(/[-–—]\s*$/,``).trim();if(t.length>2){let e=document.getElementById(`partner-name`);e&&(e.value=t,r=!0)}}t&&(t.classList.remove(`hidden`),n&&r?(t.className=`mt-3 text-xs font-semibold p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200`,t.innerHTML=`✅ Nome e Coordenadas GPS extraídos do Google Maps com sucesso!`):n?(t.className=`mt-3 text-xs font-semibold p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200`,t.innerHTML=`✅ Coordenadas GPS extraídas do link! Digite o nome do mercado abaixo.`):r?(t.className=`mt-3 text-xs font-semibold p-3 rounded-xl bg-amber-50 text-amber-800 border border-amber-200`,t.innerHTML=`✅ Nome extraído! Para links curtos (maps.app.goo.gl), você pode usar o botão "📍 Usar Meu GPS Atual" ou buscar pelo CEP.`):(t.className=`mt-3 text-xs font-semibold p-3 rounded-xl bg-amber-50 text-amber-800 border border-amber-200`,t.innerHTML=`ℹ️ Link lido. Para auto-preencher endereço rápido, digite o CEP ao lado!`))});let t=document.getElementById(`quick-cep-btn`),n=document.getElementById(`quick-cep-input`);async function r(){let e=(n?.value||``).replace(/\D/g,``),r=document.getElementById(`quick-feedback`);if(e.length!==8)r&&(r.classList.remove(`hidden`),r.className=`mt-3 text-xs font-semibold p-3 rounded-xl bg-amber-50 text-amber-800 border border-amber-200`,r.innerHTML=`⚠️ Digite um CEP válido com 8 números.`);else{t&&(t.setAttribute(`disabled`,`true`),t.innerHTML=`Buscando...`);try{let t=await(await fetch(`https://viacep.com.br/ws/${e}/json/`)).json();if(t.erro)throw Error(`CEP não encontrado.`);let n=document.getElementById(`partner-address`),i=document.getElementById(`partner-city`),a=document.getElementById(`partner-state`),o=t.logradouro?`${t.logradouro}${t.bairro?` - `+t.bairro:``}`:``;n&&o&&(n.value=o),i&&t.localidade&&(i.value=t.localidade),a&&t.uf&&(a.value=t.uf);try{let e=encodeURIComponent(`${t.logradouro||``}, ${t.localidade}, ${t.uf}, Brasil`),n=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${e}&limit=1`)).json();if(Array.isArray(n)&&n.length>0){let e=document.getElementById(`partner-lat`),t=document.getElementById(`partner-lng`);e&&(e.value=parseFloat(n[0].lat).toFixed(6)),t&&(t.value=parseFloat(n[0].lon).toFixed(6))}}catch(e){console.warn(`Geocodificação opcional:`,e)}r&&(r.classList.remove(`hidden`),r.className=`mt-3 text-xs font-semibold p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200`,r.innerHTML=`✅ Endereço preenchido: <strong>${t.localidade} - ${t.uf}</strong>! Basta colocar o número do imóvel.`)}catch(e){r&&(r.classList.remove(`hidden`),r.className=`mt-3 text-xs font-semibold p-3 rounded-xl bg-red-50 text-red-800 border border-red-200`,r.innerHTML=`❌ ${e.message||`Erro ao buscar CEP.`}`)}finally{t&&(t.removeAttribute(`disabled`),t.innerHTML=`Buscar CEP`)}}}t?.addEventListener(`click`,r),n?.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),r())}),document.getElementById(`partner-form`)?.addEventListener(`submit`,async t=>{t.preventDefault(),C=``,w=``;let n=document.getElementById(`partner-id`)?.value||void 0,r=document.getElementById(`partner-name`)?.value,i=document.getElementById(`partner-phone`)?.value,a=document.getElementById(`partner-address`)?.value,o=document.getElementById(`partner-city`)?.value,s=document.getElementById(`partner-state`)?.value,c=parseFloat(document.getElementById(`partner-lat`)?.value),l=parseFloat(document.getElementById(`partner-lng`)?.value),u=document.getElementById(`partner-active`)?.checked,d=Array.from(document.querySelectorAll(`input[name="product-checkbox"]:checked`)).map(e=>e.value);if(d.length===0){C=`Selecione ao menos um produto da Dom Iraque para este estabelecimento.`,e();return}let f=document.getElementById(`save-partner-submit-btn`);f&&(f.setAttribute(`disabled`,`true`),f.innerHTML=`Salvando no Firestore...`);try{await g({id:n,name:r,phone:i,address:a,city:o,state:s,lat:c,lng:l,productIds:d,active:u}),w=n?`Estabelecimento atualizado com sucesso!`:`Novo estabelecimento cadastrado com sucesso!`,b=null,y=`lista`,await M(),e()}catch(t){C=t.message||`Erro ao salvar parceiro.`,e()}}),document.querySelectorAll(`.toggle-status-btn`).forEach(t=>{t.addEventListener(`click`,async t=>{let n=t.currentTarget,r=n.getAttribute(`data-toggle-id`),i=n.getAttribute(`data-active`)===`true`;if(r)try{await _(r,!i),await M(),e()}catch(t){C=t.message||`Falha ao alterar status.`,e()}})}),document.querySelectorAll(`.edit-partner-btn`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-edit-id`),r=x.find(e=>e.id===n);r&&(b=r,y=`novo`,e())})}),document.querySelectorAll(`.delete-partner-btn`).forEach(t=>{t.addEventListener(`click`,async t=>{let n=t.currentTarget,r=n.getAttribute(`data-delete-id`),i=n.getAttribute(`data-name`);if(r&&confirm(`Tem certeza que deseja excluir o parceiro "${i}"?`))try{await v(r),w=`Parceiro "${i}" removido com sucesso.`,await M(),e()}catch(t){C=t.message||`Falha ao excluir parceiro.`,e()}})}),[document.getElementById(`admin-seed-btn`),document.getElementById(`empty-seed-btn`)].forEach(t=>{t?.addEventListener(`click`,async()=>{confirm(`Deseja importar automaticamente os 12 estabelecimentos de teste para o banco de dados?`)&&(await N(),e())})})}async function M(){if(u()){S=!0;try{x=await h(),x.length===0&&(x=[...i])}catch(e){console.warn(`Utilizando base de contingência local de parceiros da Serra Gaúcha:`,e),x=[...i]}finally{S=!1}}}async function N(){S=!0;try{for(let e of i)await g(e);w=`${i.length} parceiros da Serra Gaúcha (incluindo Mercearia De Marco e Atacadão De Sorvetes Gramado) importados com sucesso para o Firestore!`,await M()}catch{x=[...i],w=`${i.length} parceiros da Serra Gaúcha (Mercearia De Marco, Atacadão De Sorvetes, etc.) carregados com sucesso!`}finally{S=!1}}var P=`all`,F=null,I=`apresentacao`,L=null,R=``,z=!1,B=null;function V(){let e=document.getElementById(`app`);return e||(e=document.createElement(`div`),e.id=`app`,document.body.appendChild(e)),e}function H(){let e=window.location.hash;if(e.startsWith(`#admin`))F=null,window.scrollTo({top:0,behavior:`smooth`}),M().then(()=>K()),K();else{if(e.startsWith(`#produto/`)){let t=e.replace(`#produto/`,``),n=r.find(e=>e.id===t);if(n){F?.id!==n.id&&(L=null,R=``),F=n,I=`apresentacao`,window.scrollTo({top:0,behavior:`smooth`}),K();return}}F=null,K()}}window.addEventListener(`hashchange`,H),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&B&&(B=null,K())});function U(e){window.location.hash=`#produto/${e}`}function W(){window.location.hash=`#catalogo`;let e=document.getElementById(`catalogo`);e&&e.scrollIntoView({behavior:`smooth`})}function G(e){let t=encodeURIComponent(`Olá! Gostaria de receber uma cotação e condições comerciais no atacado para o produto: ${e} da Dom Iraque.`);window.open(`https://wa.me/5554984049311?text=${t}`,`_blank`)}function K(){T()?(V().innerHTML=E(),j(K)):(F?q(F):J(),X())}function q(e){let t=r.filter(t=>t.category===e.category&&t.id!==e.id).slice(0,3);V().innerHTML=`
    <!-- BARRA SUPERIOR INSTITUCIONAL -->
    <div class="bg-brand-black text-white py-2 px-4 sm:px-8 text-xs border-b border-white/10">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center gap-1.5 font-semibold text-brand-wheat">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Canal Direto da Fábrica & Atacado B2B
          </span>
          <span class="hidden md:inline text-gray-600">|</span>
          <span class="hidden md:inline text-gray-300">Catálogo de produtos e atendimento comercial</span>
        </div>
        <div class="flex items-center gap-4 text-gray-300">
          <span>Seg. a Sex. 07h30 às 18h00</span>
          <span class="text-gray-600">|</span>
          <a href="https://wa.me/5554984049311" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors font-semibold text-white">Central B2B: (54) 98404-9311</a>
        </div>
      </div>
    </div>

    <!-- CABEÇALHO -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        <a href="#inicio" class="flex items-center gap-3">
          <img src="${n(`/assets/brand/logo_hd.png`)}" alt="Dom Iraque" class="h-11 w-auto object-contain" />
        </a>

        <nav class="hidden lg:flex items-center gap-8 font-semibold text-sm text-gray-700">
          <a href="#inicio" class="hover:text-brand-red transition-colors">Início</a>
          <a href="#catalogo" class="text-brand-red font-bold">Catálogo de Produtos</a>
          <a href="#sobre" class="hover:text-brand-red transition-colors">A Indústria</a>
          <a href="#segmentos" class="hover:text-brand-red transition-colors">Segmentos Atendidos</a>
          <a href="#qualidade" class="hover:text-brand-red transition-colors">Controle de Qualidade</a>
          <a href="#contato" class="hover:text-brand-red transition-colors">Contato Comercial</a>
        </nav>

        <div class="flex items-center gap-3">
          <button id="detail-quote-nav-btn" class="inline-flex items-center justify-center py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold btn-primary shadow-sm">
            Fazer Cotação B2B
          </button>
        </div>
      </div>
    </header>

    <!-- PÁGINA DO PRODUTO (PADRÃO AURORA ALIMENTOS) -->
    <main class="py-10 bg-brand-light min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        
        <!-- BREADCRUMB NO PADRÃO CORPORATIVO -->
        <nav class="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
          <a href="#inicio" class="hover:text-brand-red transition-colors">Início</a>
          <span>/</span>
          <a href="#catalogo" class="hover:text-brand-red transition-colors">Produtos</a>
          <span>/</span>
          <span class="text-gray-400 capitalize">${e.category}</span>
          <span>/</span>
          <span class="text-brand-black font-bold">${e.name}</span>
        </nav>

        <!-- BLOCO PRINCIPAL DO PRODUTO -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 card-shadow border border-gray-200/90 mb-12">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <!-- Coluna da Foto do Produto com Efeito de Estúdio -->
            <div class="lg:col-span-5 flex flex-col gap-4">
              <div class="relative rounded-3xl bg-gradient-to-b from-gray-50 via-white to-brand-light p-8 border border-gray-100 flex items-center justify-center min-h-[380px] overflow-hidden group shadow-inner cursor-zoom-in open-zoom-trigger" data-zoom-img="${e.image}" data-zoom-title="${e.name}">
                <!-- Aura de Luz Gastronômica -->
                <div class="absolute inset-0 food-aura-intense pointer-events-none"></div>

                <img 
                  src="${e.image}" 
                  alt="${e.name}" 
                  class="max-h-76 max-w-full object-contain food-img-pop drop-shadow-xl z-10"
                />
                <span class="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-extrabold glass-dark-badge text-white shadow-sm z-20 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                  ${e.packWeight}
                </span>
                <span class="absolute top-4 right-4 px-3.5 py-1.5 rounded-full text-xs font-bold red-badge z-20 shimmer-badge shadow-sm">
                  ★ Padrão B2B Premium
                </span>

                <div class="absolute bottom-4 right-4 z-20 glass-badge px-3 py-1.5 rounded-xl text-[11px] font-bold text-gray-700 flex items-center gap-1.5 shadow-sm group-hover:scale-105 transition-transform">
                  <span>🔍 Clique para ampliar</span>
                </div>
              </div>

              <!-- Mini Destaques da Embalagem -->
              <div class="grid grid-cols-3 gap-2.5 text-center">
                <div class="p-2.5 rounded-xl bg-brand-light border border-gray-200">
                  <div class="text-[10px] text-gray-500 font-bold uppercase">Conservação</div>
                  <div class="text-xs font-bold text-brand-black mt-0.5">-18°C Freezer</div>
                </div>
                <div class="p-2.5 rounded-xl bg-brand-light border border-gray-200">
                  <div class="text-[10px] text-gray-500 font-bold uppercase">Tempo Médio</div>
                  <div class="text-xs font-bold text-brand-red mt-0.5">${e.preparation.time}</div>
                </div>
                <div class="p-2.5 rounded-xl bg-brand-light border border-gray-200">
                  <div class="text-[10px] text-gray-500 font-bold uppercase">Validade</div>
                  <div class="text-xs font-bold text-brand-black mt-0.5">${e.conservation.freezerTime}</div>
                </div>
              </div>
            </div>

            <!-- Coluna de Informações e Chamada Comercial -->
            <div class="lg:col-span-7 flex flex-col">
              <div class="inline-flex items-center gap-2 mb-2">
                <span class="px-2.5 py-1 rounded-md bg-brand-red/10 text-brand-red text-xs font-extrabold uppercase tracking-wider">
                  ${e.line}
                </span>
              </div>

              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-black font-heading mb-4 leading-tight">
                ${e.name}
              </h1>

              <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                ${e.tagline}
              </p>

              <!-- Atributos Chave -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div class="flex items-center gap-3 p-3 rounded-xl bg-brand-light border border-gray-200/80">
                  <div class="w-8 h-8 rounded-lg bg-brand-red text-white flex items-center justify-center font-bold text-xs">
                    📦
                  </div>
                  <div>
                    <div class="text-[11px] text-gray-500 font-semibold">Embalagem Master:</div>
                    <div class="text-xs font-bold text-brand-black">${e.packWeight}</div>
                  </div>
                </div>

                ${e.unitWeight?`
                  <div class="flex items-center gap-3 p-3 rounded-xl bg-brand-light border border-gray-200/80">
                    <div class="w-8 h-8 rounded-lg bg-brand-red text-white flex items-center justify-center font-bold text-xs">
                      ⚖️
                    </div>
                    <div>
                      <div class="text-[11px] text-gray-500 font-semibold">Peso Individual:</div>
                      <div class="text-xs font-bold text-brand-black">${e.unitWeight}</div>
                    </div>
                  </div>
                `:``}

                <div class="flex items-center gap-3 p-3 rounded-xl bg-brand-light border border-gray-200/80">
                  <div class="w-8 h-8 rounded-lg bg-brand-red text-white flex items-center justify-center font-bold text-xs">
                    ❄️
                  </div>
                  <div>
                    <div class="text-[11px] text-gray-500 font-semibold">Cadeia de Temperatura:</div>
                    <div class="text-xs font-bold text-brand-black">${e.conservation.freezer}</div>
                  </div>
                </div>

                <div class="flex items-center gap-3 p-3 rounded-xl bg-brand-light border border-gray-200/80">
                  <div class="w-8 h-8 rounded-lg bg-brand-red text-white flex items-center justify-center font-bold text-xs">
                    🔥
                  </div>
                  <div>
                    <div class="text-[11px] text-gray-500 font-semibold">Modo de Forno:</div>
                    <div class="text-xs font-bold text-brand-black">${e.preparation.temp}</div>
                  </div>
                </div>
              </div>

              <!-- Botões de Ação Imediata -->
              <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                <button 
                  id="action-whatsapp-btn"
                  class="flex-1 py-4 px-6 rounded-xl font-bold bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm shadow-md flex items-center justify-center gap-2 transition-all hover:scale-102"
                >
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  <span>Cotar no WhatsApp Comercial</span>
                </button>
                
                <button 
                  id="detail-find-store-btn"
                  class="py-4 px-6 rounded-xl font-bold bg-white border border-gray-300 hover:border-brand-red hover:text-brand-red text-gray-800 text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>📍</span> Onde Encontrar
                </button>

                <button 
                  id="action-back-catalog-btn"
                  class="py-4 px-6 rounded-xl font-bold bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm transition-all"
                >
                  Voltar ao Catálogo
                </button>
              </div>

              <!-- Destaque para Fornecimento B2B -->
              <div class="mt-4 p-4 rounded-2xl bg-brand-light border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div class="flex items-center gap-3 text-gray-800">
                  <span class="text-2xl">🏭</span>
                  <div>
                    <span class="font-bold block text-sm text-brand-black">Fornecimento Direto de Fábrica</span>
                    <span class="text-gray-600">Disponível em caixas e pallets para food service, padarias e distribuidores.</span>
                  </div>
                </div>
                <a 
                  href="#contato"
                  class="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl font-bold btn-primary text-white transition-all shadow-sm shrink-0 whitespace-nowrap"
                >
                  <span>Solicitar Cotação</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>

            </div>
          </div>
        </div>

        <!-- ABAS TÉCNICAS NO PADRÃO AURORA ALIMENTOS -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 card-shadow border border-gray-200 mb-12">
          
          <!-- Cabeçalho das Abas -->
          <div class="flex flex-wrap gap-2 border-b border-gray-200 pb-4 mb-8">
            <button 
              data-tab="apresentacao" 
              class="tab-btn px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${I===`apresentacao`?`btn-primary shadow-sm`:`bg-brand-light text-gray-700 hover:bg-gray-200`}"
            >
              Apresentação & Embalagem
            </button>
            <button 
              data-tab="conservacao" 
              class="tab-btn px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${I===`conservacao`?`btn-primary shadow-sm`:`bg-brand-light text-gray-700 hover:bg-gray-200`}"
            >
              Conservação & Validade
            </button>
            <button 
              data-tab="preparo" 
              class="tab-btn px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${I===`preparo`?`btn-primary shadow-sm`:`bg-brand-light text-gray-700 hover:bg-gray-200`}"
            >
              Modo de Preparo
            </button>
            <button 
              data-tab="ingredientes" 
              class="tab-btn px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${I===`ingredientes`?`btn-primary shadow-sm`:`bg-brand-light text-gray-700 hover:bg-gray-200`}"
            >
              Ingredientes & Alergênicos
            </button>
            <button 
              data-tab="nutricional" 
              class="tab-btn px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${I===`nutricional`?`btn-primary shadow-sm`:`bg-brand-light text-gray-700 hover:bg-gray-200`}"
            >
              Tabela Nutricional
            </button>
          </div>

          <!-- Conteúdo da Aba Ativa -->
          <div class="text-sm">
            ${I===`apresentacao`?`
              <div>
                <h3 class="text-lg font-bold text-brand-black mb-4">Especificações Comerciais e Logísticas</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mb-6">
                  <div class="p-4 rounded-xl bg-brand-light border border-gray-200 flex justify-between">
                    <span class="text-gray-500 font-semibold">Embalagem de Expedição:</span>
                    <span class="font-bold text-brand-black">${e.packWeight}</span>
                  </div>
                  ${e.unitWeight?`
                    <div class="p-4 rounded-xl bg-brand-light border border-gray-200 flex justify-between">
                      <span class="text-gray-500 font-semibold">Peso Médio da Unidade:</span>
                      <span class="font-bold text-brand-black">${e.unitWeight}</span>
                    </div>
                  `:``}
                  <div class="p-4 rounded-xl bg-brand-light border border-gray-200 flex justify-between">
                    <span class="text-gray-500 font-semibold">Categoria de Produto:</span>
                    <span class="font-bold text-brand-black capitalize">${e.category}</span>
                  </div>
                  <div class="p-4 rounded-xl bg-brand-light border border-gray-200 flex justify-between">
                    <span class="text-gray-500 font-semibold">Código da Linha:</span>
                    <span class="font-bold text-brand-red">${e.line}</span>
                  </div>
                </div>

                ${e.flavors&&e.flavors.length>0?`
                  <h4 class="text-sm font-bold text-brand-black mb-3">Variações e Sabores Homologados:</h4>
                  <div class="flex flex-wrap gap-2">
                    ${e.flavors.map(e=>`
                      <span class="px-3.5 py-1.5 rounded-lg bg-gray-100 text-gray-800 font-semibold text-xs border border-gray-200">
                        ${e}
                      </span>
                    `).join(``)}
                  </div>
                `:``}
              </div>
            `:``}

            ${I===`conservacao`?`
              <div>
                <h3 class="text-lg font-bold text-brand-black mb-4">Orientações de Armazenamento e Estocagem</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  Para preservar todas as características de sabor, textura e salto de forno, siga atentamente a tabela térmica de estocagem:
                </p>

                <div class="overflow-x-auto mb-6">
                  <table class="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden">
                    <thead>
                      <tr class="bg-brand-black text-white text-xs uppercase">
                        <th class="p-4 border-b border-gray-800">Local de Armazenamento</th>
                        <th class="p-4 border-b border-gray-800">Faixa de Temperatura</th>
                        <th class="p-4 border-b border-gray-800">Prazo Máximo de Validade</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 text-xs">
                      <tr class="bg-white">
                        <td class="p-4 font-bold text-brand-black">Freezer Industrial</td>
                        <td class="p-4 text-brand-red font-semibold">-18°C a -12°C</td>
                        <td class="p-4 font-bold">${e.conservation.freezerTime}</td>
                      </tr>
                      <tr class="bg-brand-light">
                        <td class="p-4 font-bold text-brand-black">Congelador Comercial</td>
                        <td class="p-4 text-gray-700">-10°C a -8°C</td>
                        <td class="p-4">${e.conservation.congeladorTime}</td>
                      </tr>
                      <tr class="bg-white">
                        <td class="p-4 font-bold text-brand-black">Geladeira / Balcão Frio</td>
                        <td class="p-4 text-gray-700">+4°C a +8°C</td>
                        <td class="p-4">${e.conservation.geladeiraTime}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold flex items-center gap-3">
                  <span class="text-xl">⚠️</span>
                  <span>${e.conservation.warning}</span>
                </div>
              </div>
            `:``}

            ${I===`preparo`?`
              <div>
                <h3 class="text-lg font-bold text-brand-black mb-4">Instruções de Preparo para Estabelecimentos</h3>
                
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div class="p-4 rounded-xl bg-brand-light border border-gray-200">
                    <span class="text-xs font-bold text-gray-500 uppercase">Equipamento Indicado</span>
                    <p class="font-bold text-brand-black text-sm mt-1">${e.preparation.method}</p>
                  </div>
                  <div class="p-4 rounded-xl bg-brand-light border border-gray-200">
                    <span class="text-xs font-bold text-gray-500 uppercase">Temperatura Recomendada</span>
                    <p class="font-bold text-brand-red text-sm mt-1">${e.preparation.temp}</p>
                  </div>
                  <div class="p-4 rounded-xl bg-brand-light border border-gray-200">
                    <span class="text-xs font-bold text-gray-500 uppercase">Tempo Médio</span>
                    <p class="font-bold text-brand-black text-sm mt-1">${e.preparation.time}</p>
                  </div>
                </div>

                <h4 class="text-sm font-bold text-brand-black uppercase mb-3">Passo a Passo da Finalização:</h4>
                <ol class="space-y-3">
                  ${e.preparation.steps.map((e,t)=>`
                    <li class="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gray-200">
                      <span class="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ${t+1}
                      </span>
                      <span class="text-gray-700 text-xs sm:text-sm leading-relaxed">${e}</span>
                    </li>
                  `).join(``)}
                </ol>
              </div>
            `:``}

            ${I===`ingredientes`?`
              <div>
                <h3 class="text-lg font-bold text-brand-black mb-4">Composição e Alergênicos</h3>
                
                <div class="p-6 rounded-2xl bg-brand-light border border-gray-200 mb-6">
                  <h4 class="text-xs font-bold text-gray-500 uppercase mb-2">Lista de Ingredientes:</h4>
                  <p class="text-gray-800 text-sm leading-relaxed">${e.ingredients}</p>
                </div>

                <div class="p-6 rounded-2xl bg-red-50 border border-brand-red/30 text-brand-black">
                  <h4 class="text-xs font-extrabold text-brand-red uppercase mb-1">Informações sobre Alergênicos:</h4>
                  <p class="text-xs sm:text-sm font-bold leading-relaxed">${e.allergens}</p>
                </div>
              </div>
            `:``}

            ${I===`nutricional`?`
              <div>
                <h3 class="text-lg font-bold text-brand-black mb-2">Tabela de Informação Nutricional</h3>
                <p class="text-xs text-gray-500 mb-6 font-semibold">Porção de Referência: ${e.nutrition.servingSize}</p>

                <div class="max-w-md border border-gray-200 rounded-2xl overflow-hidden card-shadow">
                  <div class="bg-brand-black text-white p-3 font-bold text-xs uppercase flex justify-between">
                    <span>Nutriente</span>
                    <span>Quantidade por Porção</span>
                  </div>
                  <div class="divide-y divide-gray-200 text-xs">
                    <div class="p-3 flex justify-between bg-white font-bold">
                      <span>Valor Energético</span>
                      <span class="text-brand-red">${e.nutrition.calories}</span>
                    </div>
                    <div class="p-3 flex justify-between bg-brand-light">
                      <span>Carboidratos</span>
                      <span>${e.nutrition.carbs}</span>
                    </div>
                    <div class="p-3 flex justify-between bg-white">
                      <span>Proteínas</span>
                      <span>${e.nutrition.proteins}</span>
                    </div>
                    <div class="p-3 flex justify-between bg-brand-light">
                      <span>Gorduras Totais</span>
                      <span>${e.nutrition.totalFat}</span>
                    </div>
                    <div class="p-3 flex justify-between bg-white">
                      <span>Gorduras Saturadas</span>
                      <span>${e.nutrition.saturatedFat}</span>
                    </div>
                    <div class="p-3 flex justify-between bg-brand-light">
                      <span>Sódio</span>
                      <span>${e.nutrition.sodium}</span>
                    </div>
                  </div>
                  <div class="p-3 bg-gray-50 text-[10px] text-gray-500 border-t border-gray-200">
                    * % Valores Diários com base em uma dieta de 2.000 kcal ou 8.400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas.
                  </div>
                </div>
              </div>
            `:``}
          </div>

        </div>

        <!-- DISPONIBILIDADE REGIONAL: RESULTADO PRIVADO, SEM IDENTIFICAR PARCEIROS -->
        <section id="produto-onde-comprar" class="bg-white rounded-3xl p-6 sm:p-10 card-shadow border border-gray-200 mb-12 scroll-mt-24">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 mb-3">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Consulta de Disponibilidade Regional
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-brand-black font-heading">Onde encontrar ${e.name}</h3>
            <p class="text-sm text-gray-600 mt-2">
              Consulte se existe um estabelecimento parceiro com este item em um raio de até 50 km de você. Para preservar a segurança e o sigilo comercial, os dados cadastrais detalhados dos parceiros são mantidos em ambiente privado.
            </p>
            <div class="mt-6 flex flex-wrap gap-3 items-center">
              <button 
                id="product-gps-btn" 
                class="py-3.5 px-6 rounded-xl font-bold bg-brand-black hover:bg-gray-800 text-white text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                ${z?`disabled`:``}
              >
                ${z?`<span>⌛</span> Consultando disponibilidade...`:`<span>📍</span> Verificar disponibilidade perto de mim`}
              </button>
              <span class="text-xs text-gray-400">Sua localização pontual não é armazenada.</span>
            </div>
            <div id="availability-result" class="mt-5" aria-live="polite">
              ${L?.available?`
                <div class="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <p class="font-bold text-emerald-900 flex items-center gap-2"><span>✅</span> Encontramos um parceiro próximo com este produto!</p>
                  <p class="text-sm text-emerald-800 mt-1">Distância aproximada: cerca de <strong>${L.distanceKm} km</strong> de você.</p>
                  <p class="text-xs text-emerald-700 mt-2">O estabelecimento parceiro não é identificado nominalmente para preservar a confidencialidade comercial.</p>
                </div>
              `:L&&!L.available?`
                <div class="p-5 rounded-2xl bg-amber-50 border border-amber-200">
                  <p class="font-bold text-amber-900 flex items-center gap-2"><span>📍</span> Nenhum parceiro registrado com este produto em até 50 km.</p>
                  <p class="text-sm text-amber-800 mt-1">Consulte nossa equipe comercial no WhatsApp para indicarmos o ponto de venda mais acessível ou opções de atendimento.</p>
                </div>
              `:R?`
                <p class="text-sm text-gray-700 p-4 bg-gray-50 rounded-xl border border-gray-200">${R}</p>
              `:``}
            </div>
          </div>
        </section>

        <!-- PRODUTOS RELACIONADOS DA MESMA LINHA -->
        ${t.length>0?`
          <div class="mb-12">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-xl font-bold font-heading text-brand-black">Produtos Relacionados para seu Negócio</h3>
              <a href="#catalogo" class="text-xs font-bold text-brand-red hover:underline">Ver Catálogo Completo →</a>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
              ${t.map(e=>`
                <div class="bg-white rounded-2xl p-5 border border-gray-200 card-shadow card-shadow-hover flex flex-col justify-between">
                  <div class="h-44 bg-brand-light rounded-xl p-4 flex items-center justify-center mb-4">
                    <img src="${e.image}" alt="${e.name}" class="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <span class="text-[10px] font-bold text-brand-red uppercase block mb-1">${e.line}</span>
                    <h4 class="text-sm font-bold text-brand-black mb-2">${e.name}</h4>
                    <p class="text-xs text-gray-500 line-clamp-2 mb-4">${e.tagline}</p>
                  </div>
                  <button 
                    data-navigate-id="${e.id}"
                    class="navigate-product-btn w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-gray-100 hover:btn-primary text-brand-black transition-all"
                  >
                    Ver Detalhes do Produto
                  </button>
                </div>
              `).join(``)}
            </div>
          </div>
        `:``}

      </div>
    </main>

    <!-- RODAPÉ -->
    <footer class="bg-brand-black text-gray-400 py-10 text-xs border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>© Dom Iraque Indústria de Alimentos — Todos os direitos reservados. Nova Petrópolis / RS.</div>
        <div class="flex gap-4 text-gray-500">
          <span>Padrão Sanitário BPF</span>
          <span>•</span>
          <span>Controle Térmico a -18°C</span>
          <span>•</span>
          <span>Portal B2B Oficial</span>
        </div>
      </div>
    </footer>

    <!-- BOTÃO FLUTUANTE DE WHATSAPP -->
    <a 
      href="https://wa.me/5554984049311?text=Olá!%20Gostaria%20de%20solicitar%20uma%20cotação%20para%20minha%20empresa%20com%20a%20Dom%20Iraque." 
      target="_blank" 
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group border-2 border-white/40"
    >
      <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      <span class="text-xs font-extrabold tracking-wide hidden sm:inline">WhatsApp Comercial</span>
    </a>

    ${Y()}
  `,document.querySelectorAll(`.tab-btn`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-tab`);n&&(I=n,q(e),X())})}),document.getElementById(`action-whatsapp-btn`)?.addEventListener(`click`,()=>{G(e.name)}),document.getElementById(`detail-find-store-btn`)?.addEventListener(`click`,e=>{e.preventDefault(),document.getElementById(`produto-onde-comprar`)?.scrollIntoView({behavior:`smooth`})}),document.getElementById(`product-gps-btn`)?.addEventListener(`click`,()=>{Z(e.id)}),document.getElementById(`action-back-catalog-btn`)?.addEventListener(`click`,W),document.getElementById(`detail-quote-nav-btn`)?.addEventListener(`click`,()=>{window.location.hash=`#contato`}),document.querySelectorAll(`.navigate-product-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-navigate-id`);t&&U(t)})})}function J(){let t=P===`all`?r:r.filter(e=>e.category===P);V().innerHTML=`
    <!-- BARRA SUPERIOR INSTITUCIONAL (COM CORES OFICIAIS DO BANNER) -->
    <div class="brand-ribbon-strip text-white py-2 px-4 sm:px-8 text-xs font-semibold shadow-sm">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center gap-1.5 font-bold tracking-wide">
            <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            DOM IRAQUE ALIMENTOS · CANAL DIRETO DE FÁBRICA & ATACADO B2B
          </span>
          <span class="hidden md:inline opacity-60">|</span>
          <span class="hidden md:inline opacity-90 text-[11px]">Pães · Pizzas · Lanches · Congelados</span>
        </div>
        <div class="flex items-center gap-4 text-xs">
          <span class="opacity-90">Atendimento Seg. a Sex. 07h30 às 18h00</span>
          <span class="hidden md:inline opacity-60">|</span>
          <a href="https://wa.me/5554984049311" target="_blank" rel="noopener noreferrer" class="hover:underline font-extrabold text-white">WhatsApp Comercial: (54) 98404-9311</a>
        </div>
      </div>
    </div>

    <!-- CABEÇALHO PRINCIPAL -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        <a href="#inicio" class="flex items-center gap-3">
          <img src="${n(`/assets/brand/logo_hd.png`)}" alt="Dom Iraque - Pães, Pizzas, Lanches" class="h-12 w-auto object-contain" />
        </a>

        <nav class="hidden lg:flex items-center gap-7 font-semibold text-sm text-gray-700">
          <a href="#inicio" class="hover:text-brand-red transition-colors">Início</a>
          <a href="#catalogo" class="hover:text-brand-red transition-colors">Catálogo</a>
          <a href="#onde-comprar" class="hover:text-brand-red transition-colors">Onde Comprar</a>
          <a href="#sobre" class="hover:text-brand-red transition-colors">A Indústria</a>
          <a href="#segmentos" class="hover:text-brand-red transition-colors">Segmentos</a>
          <a href="#qualidade" class="hover:text-brand-red transition-colors">Qualidade</a>
          <a href="#contato" class="hover:text-brand-red transition-colors">Contato</a>
        </nav>

        <div class="flex items-center gap-3">
          <a href="#contato" class="hidden sm:inline-flex items-center justify-center py-2.5 px-5 rounded-xl text-sm font-bold btn-primary shadow-sm">
            Fazer Cotação no Atacado
          </a>
          <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-700 hover:text-brand-black rounded-lg bg-gray-100">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" class="hidden lg:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3 text-sm font-semibold text-gray-700">
        <a href="#inicio" class="block py-2 hover:text-brand-red">Início</a>
        <a href="#catalogo" class="block py-2 hover:text-brand-red">Catálogo de Produtos</a>
        <a href="#onde-comprar" class="block py-2 hover:text-brand-red">Onde Comprar</a>
        <a href="#sobre" class="block py-2 hover:text-brand-red">A Indústria</a>
        <a href="#segmentos" class="block py-2 hover:text-brand-red">Segmentos Atendidos</a>
        <a href="#qualidade" class="block py-2 hover:text-brand-red">Controle de Qualidade</a>
        <a href="#contato" class="block py-2 text-brand-red">Fazer Cotação no Atacado</a>
      </div>
    </header>

    <!-- HERO PREMIUM GASTRONÔMICO DOM IRAQUE -->
    <section id="inicio" class="di-hero relative overflow-hidden">
      <div class="di-hero-grain"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[620px] py-16 md:py-20">
          <div class="lg:col-span-6 flex flex-col items-start">
            <div class="di-eyebrow mb-6">
              <span class="di-eyebrow-dot"></span>
              PÃES · PIZZAS · LANCHES · ATACADO B2B
            </div>
            <h1 class="di-hero-title mb-6">
              Sabor que aproxima.<br/>
              <span>Qualidade que alimenta negócios.</span>
            </h1>
            <p class="di-hero-copy mb-8 max-w-xl">
              Indústria brasileira especializada em pizzas artesanais congeladas, panificados nobres e salgados de alto padrão. Fornecimento direto de fábrica para redes varejistas, supermercados e food service.
            </p>
            <div class="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              <a href="#catalogo" class="di-btn-primary">
                Ver Catálogo Completo <span aria-hidden="true">→</span>
              </a>
              <a href="#contato" class="di-btn-outline">
                Falar com Vendas Atacado
              </a>
            </div>
            <div class="di-hero-proof">
              <div><span class="wheat-bullet">🌾</span><p>Trigo Nobre & Fermentação Controlada</p></div>
              <div><span class="wheat-bullet">🌾</span><p>Fornecimento Direto de Fábrica</p></div>
              <div><span class="wheat-bullet">🌾</span><p>Padrão Sanitário BPF & Frio a -18°C</p></div>
            </div>
          </div>
          <div class="lg:col-span-6 relative">
            <div class="di-hero-image-wrap">
              <div class="di-hero-image-backdrop"></div>
              <img src="${n(`/assets/banners/hero_basket.png`)}" alt="Seleção de produtos Dom Iraque" class="di-hero-image" />
              <div class="di-hero-image-caption">
                <span>DOM IRAQUE</span>
                <strong>Variedade para cada ocasião.</strong>
              </div>
            </div>
            <div class="di-floating-product di-floating-one">
              <img src="${n(`/assets/banners/pizza_showcase.png`)}" alt="Pizza Dom Iraque" />
              <span>Pizzas Artesanais</span>
            </div>
            <div class="di-floating-product di-floating-two">
              <img src="${n(`/assets/banners/tabua_gastronomica.png`)}" alt="Seleção de lanches e salgados Dom Iraque" />
              <span>Sabores para Compartilhar</span>
            </div>
          </div>
        </div>
      </div>
      <div class="di-hero-bottomline">
        <span>DOM IRAQUE INDÚSTRIA DE ALIMENTOS</span><span>PÃES · PIZZAS · LANCHES · CONGELADOS DE ALTA PERFORMANCE</span>
      </div>
    </section>

    <!-- SEÇÃO CATÁLOGO DE PRODUTOS ESTILO AURORA ALIMENTOS -->
    <section id="catalogo" class="py-20 bg-brand-light border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span class="text-brand-red text-xs font-extrabold uppercase tracking-wider">Linha Completa de Alimentos</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-black mt-1">Catálogo Oficial de Produtos</h2>
            <p class="text-gray-600 text-sm mt-2 max-w-xl">
              Clique em qualquer produto para visualizar a página completa com tabela nutricional, orientações de conservação e modo de preparo.
            </p>
          </div>
          <div class="text-xs font-semibold px-3.5 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 shadow-xs">
            Exibindo <span class="text-brand-red font-bold">${t.length}</span> produtos no catálogo
          </div>
        </div>

        <!-- Filtros por Categoria -->
        <div class="flex flex-wrap gap-2 mb-10 pb-4 border-b border-gray-200">
          ${e.map(e=>{let t=P===e.id;return`
              <button 
                data-category="${e.id}"
                class="category-filter-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${t?`btn-primary shadow-sm`:`bg-white hover:bg-gray-100 text-gray-700 border border-gray-200`}"
              >
                ${e.name}
              </button>
            `}).join(``)}
        </div>

        <!-- Grid de Produtos estilo Vitrine Aurora Premium -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${t.map(e=>`
            <div class="bg-white rounded-3xl overflow-hidden flex flex-col card-shadow card-shadow-hover border border-gray-200/90 group pro-card">
              
              <div class="relative bg-gradient-to-b from-gray-50 via-white to-brand-light p-6 h-64 flex items-center justify-center overflow-hidden border-b border-gray-100 cursor-pointer navigate-card" data-navigate-id="${e.id}">
                <!-- Aura de Luz Gastronômica de Estúdio -->
                <div class="absolute inset-0 food-aura pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"></div>

                <img 
                  src="${e.image}" 
                  alt="${e.name}" 
                  class="max-h-full max-w-full object-contain food-img-pop drop-shadow-md z-10"
                  loading="lazy"
                />

                <div class="absolute top-3.5 left-3.5 z-20">
                  <span class="px-2.5 py-1 rounded-full text-xs font-bold glass-dark-badge text-white shadow-xs flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    ${e.packWeight}
                  </span>
                </div>

                <div class="absolute top-3.5 right-3.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    type="button"
                    class="open-zoom-btn px-2.5 py-1 rounded-lg text-[11px] font-bold glass-badge text-gray-800 border border-gray-200/80 shadow-md flex items-center gap-1 hover:bg-white transition-colors"
                    data-zoom-img="${e.image}"
                    data-zoom-title="${e.name}"
                    title="Ampliar Foto em Alta Resolução"
                  >
                    🔍 Zoom
                  </button>
                </div>

                ${e.unitWeight?`
                  <div class="absolute bottom-3.5 left-3.5 z-20">
                    <span class="px-2.5 py-1 rounded-lg text-[11px] glass-badge font-semibold text-gray-700 border border-gray-200 shadow-xs">
                      Unidade: ${e.unitWeight}
                    </span>
                  </div>
                `:``}
              </div>

              <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-[10px] font-extrabold text-brand-red uppercase tracking-wide">
                      ${e.line}
                    </span>
                    <span class="text-[10px] text-gray-400 font-medium">CONSERVAÇÃO CONFORME RÓTULO</span>
                  </div>
                  <h3 class="text-lg font-bold font-heading text-brand-black group-hover:text-brand-red transition-colors mb-2 cursor-pointer navigate-card" data-navigate-id="${e.id}">
                    ${e.name}
                  </h3>
                  <p class="text-xs text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                    ${e.tagline}
                  </p>
                </div>

                <div class="pt-4 border-t border-gray-100 flex gap-2">
                  <button 
                    data-navigate-id="${e.id}"
                    class="navigate-product-btn w-full py-3 px-4 rounded-xl text-xs font-bold btn-primary transition-all flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md"
                  >
                    <span>Ver Ficha Completa do Produto</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
                  </button>
                </div>

              </div>

            </div>
          `).join(``)}
        </div>

      </div>
    </section>

    <!-- SEÇÃO SOBRE A INDÚSTRIA DOM IRAQUE -->
    <section id="sobre" class="py-20 bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 relative">
            <div class="relative rounded-3xl overflow-hidden card-shadow border border-gray-200 bg-brand-light">
              <img src="${n(`/assets/banners/tabua_gastronomica.png`)}" alt="Produção de Lanches e Salgados Dom Iraque" class="w-full h-auto object-cover" />
            </div>
            <div class="absolute -bottom-6 -right-6 p-5 rounded-2xl bg-white border border-gray-200 shadow-xl max-w-xs hidden sm:block">
              <div class="text-2xl font-extrabold text-brand-red font-heading mb-1">Nosso portfólio</div>
              <div class="text-xs text-gray-600 font-medium">Variedade de produtos para diferentes ocasiões de consumo e canais de venda.</div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <span class="text-brand-red text-xs font-extrabold uppercase tracking-wider">A marca Dom Iraque</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-black mt-2 mb-6">
              Produtos que unem praticidade, variedade e sabor
            </h2>
            
            <p class="text-gray-700 text-base leading-relaxed mb-4">
              A <strong>Dom Iraque</strong> reúne diferentes linhas de alimentos para atender negócios que buscam ampliar seu portfólio e oferecer mais opções aos consumidores.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">
              Nosso catálogo apresenta opções de pizzas, panificados, salgados, assados, folhados e sobremesas, com informações de apresentação, preparo e conservação para apoiar a escolha de cada parceiro comercial.
            </p>

            <div class="space-y-3 mb-8">
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</div>
                <span class="text-sm font-semibold text-gray-800">Contratos de fornecimento contínuo e escalonado</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</div>
                <span class="text-sm font-semibold text-gray-800">Matérias-primas nobres, queijos selecionados e carnes inspecionadas</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</div>
                <span class="text-sm font-semibold text-gray-800">Embalagens industriais de alta resistência e fácil estocagem</span>
              </div>
            </div>

            <a href="#contato" class="inline-flex items-center justify-center py-3.5 px-7 rounded-xl font-bold btn-primary text-sm shadow-md">
              Cadastrar Minha Empresa
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- SHOWCASE GASTRONÔMICO: ENGENHARIA DE PIZZAS DOM IRAQUE -->
    <section class="py-20 bg-gradient-to-br from-[#121214] via-[#1B1B1F] to-[#141416] text-white relative overflow-hidden border-y border-white/10">
      <!-- Luzes Ambientes de Estúdio Fotográfico -->
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-brand-red/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 flex flex-col items-start">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-dark-badge border border-brand-wheat/30 text-xs font-bold text-brand-wheat mb-6">
              <span class="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              <span>Linha de Pizzas Dom Iraque</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              A Pizza que Conquista no <span class="text-brand-red">Visual, Textura e Salto de Forno</span>
            </h2>

            <p class="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              Nossa linha de pizzas reúne diferentes sabores e apresentações para ampliar as opções de varejo, conveniência e food service. Conheça as características de cada produto e encontre as opções adequadas ao seu negócio.
            </p>

            <div class="grid grid-cols-2 gap-4 w-full mb-8">
              <div class="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div class="text-amber-400 font-bold text-xl mb-1">Variedade</div>
                <div class="text-xs text-gray-300 font-medium">Opções para diferentes ocasiões de consumo</div>
              </div>
              <div class="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div class="text-brand-red font-bold text-xl mb-1">Sabor</div>
                <div class="text-xs text-gray-300 font-medium">Combinações para diferentes preferências</div>
              </div>
              <div class="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div class="text-emerald-400 font-bold text-xl mb-1">Praticidade</div>
                <div class="text-xs text-gray-300 font-medium">Produtos com orientações de preparo e conservação</div>
              </div>
              <div class="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div class="text-brand-wheat font-bold text-xl mb-1">Parcerias</div>
                <div class="text-xs text-gray-300 font-medium">Atendimento para varejo e food service</div>
              </div>
            </div>

            <div class="flex flex-wrap gap-4">
              <a href="#catalogo" class="py-3.5 px-6 rounded-xl font-bold btn-primary text-xs sm:text-sm shadow-xl flex items-center gap-2">
                <span>Ver Pizzas no Catálogo</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg>
              </a>
              <a href="https://wa.me/5554984049311?text=Olá!%20Gostaria%20de%20solicitar%20uma%20amostra%20e%20condições%20comerciais%20da%20linha%20de%20pizzas%20Dom%20Iraque." target="_blank" rel="noopener noreferrer" class="py-3.5 px-6 rounded-xl font-bold bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm transition-all flex items-center gap-2">
                <span>Solicitar Amostra B2B</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-6 relative flex items-center justify-center">
            <!-- Aura Circular Central -->
            <div class="absolute w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <div class="relative group cursor-pointer open-zoom-trigger" data-zoom-img="${n(`/assets/banners/pizza_showcase.png`)}" data-zoom-title="Linha de Pizzas Dom Iraque">
              <img 
                src="${n(`/assets/banners/pizza_showcase.png`)}" 
                alt="Pizza Showcase Dom Iraque" 
                class="w-full max-w-lg h-auto object-contain food-img-pop drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-700"
              />

              <!-- Selo Flutuante de Forno -->
              <div class="absolute -bottom-4 -left-4 glass-dark-badge p-3.5 rounded-2xl border border-amber-500/30 flex items-center gap-3 animate-float">
                <span class="text-2xl">🍕</span>
                <div>
                  <div class="text-[10px] uppercase font-bold text-amber-400">Linha Food Service & Varejo</div>
                  <div class="text-xs font-bold text-white">Com e Sem Borda Recheada</div>
                </div>
              </div>

              <div class="absolute top-4 right-4 glass-dark-badge px-3 py-1.5 rounded-xl text-[11px] font-bold text-white border border-white/20 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                <span>🔍 Toque para Ampliar</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SEGMENTOS ATENDIDOS (B2B) -->
    <section id="segmentos" class="py-16 bg-brand-light border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-brand-red text-xs font-extrabold uppercase tracking-wider">Soluções Corporativas</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-brand-black mt-2">Canais comerciais abastecidos pela Dom Iraque</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-white border border-gray-200 card-shadow">
            <div class="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-bold mb-4">01</div>
            <h3 class="text-base font-bold text-brand-black mb-2">Supermercados e Redes</h3>
            <p class="text-xs text-gray-600 leading-relaxed">Pizzas, pães de forma e cucas em embalagens atrativas de gôndola que giram com facilidade e geram margem alta.</p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-gray-200 card-shadow">
            <div class="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-bold mb-4">02</div>
            <h3 class="text-base font-bold text-brand-black mb-2">Atacadistas e Distribuidores</h3>
            <p class="text-xs text-gray-600 leading-relaxed">Caixas industriais de 3kg a 10kg, pallets fechados e preços diferenciados para operadores logísticos regionais.</p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-gray-200 card-shadow">
            <div class="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-bold mb-4">03</div>
            <h3 class="text-base font-bold text-brand-black mb-2">Padarias e Mercearias</h3>
            <p class="text-xs text-gray-600 leading-relaxed">Pães franceses e cervejinha congelados de salto de forno perfeito, reduzindo tempo e custo operacional do padeiro.</p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-gray-200 card-shadow">
            <div class="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-bold mb-4">04</div>
            <h3 class="text-base font-bold text-brand-black mb-2">Buffets e Empresas de Alimentação</h3>
            <p class="text-xs text-gray-600 leading-relaxed">Mini salgados para festas com contagem exata no pacote (45 a 80 unidades), tortas e petit gâteau para sobremesas finas.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO CONTROLE DE QUALIDADE -->
    <section id="qualidade" class="py-20 bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-brand-red text-xs font-extrabold uppercase tracking-wider">Segurança Alimentar</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-black mt-2 mb-4">Controle de Qualidade em Cada Etapa Produtiva</h2>
          <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
            Todos os processos fabris são auditados diariamente por profissionais de controle de qualidade segundo as diretrizes de Boas Práticas de Fabricação e segurança dos alimentos.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="p-8 rounded-2xl bg-brand-light border border-gray-200 card-shadow">
            <div class="w-14 h-14 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-6 text-xl font-bold">
              01
            </div>
            <h3 class="text-xl font-bold text-brand-black mb-3">Seleção Rígida de Matéria-Prima</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Informações de ingredientes e características disponíveis nas fichas individuais dos produtos.</p>
          </div>

          <div class="p-8 rounded-2xl bg-brand-light border border-gray-200 card-shadow">
            <div class="w-14 h-14 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-6 text-xl font-bold">
              02
            </div>
            <h3 class="text-xl font-bold text-brand-black mb-3">Monitoramento Térmico Contínuo</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Sensores inteligentes acompanham curvas de fermentação, cozimento e túneis de ultracongelamento em tempo real.</p>
          </div>

          <div class="p-8 rounded-2xl bg-brand-light border border-gray-200 card-shadow">
            <div class="w-14 h-14 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-6 text-xl font-bold">
              03
            </div>
            <h3 class="text-xl font-bold text-brand-black mb-3">Embalagens Industriais Seladas</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Filmes com barreira contra umidade e odores que preservam a integridade e garantem a vida útil máxima do produto.</p>
          </div>
        </div>

        <div class="rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-gradient-to-r from-brand-black to-gray-900 text-white card-shadow flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="max-w-2xl">
            <span class="text-xs font-bold uppercase tracking-wider text-brand-wheat">Parceria Comercial de Longo Prazo</span>
            <h3 class="text-2xl sm:text-3xl font-bold font-heading text-white mt-1 mb-2">Deseja ser um distribuidor credenciado ou comprar no atacado?</h3>
            <p class="text-sm text-gray-300 leading-relaxed">Nossa mesa comercial oferece tabelas de preços escalonadas por volume, apoio logístico e envio de amostras para homologação.</p>
          </div>
          <a href="#contato" class="shrink-0 py-4 px-8 rounded-xl font-bold btn-primary text-sm shadow-xl">
            Falar com um Consultor Comercial
          </a>
        </div>

      </div>
    </section>

    <!-- SEÇÃO DE PRESENÇA REGIONAL -->
    <section id="onde-comprar" class="py-16 bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <span class="text-brand-red text-xs font-extrabold uppercase tracking-wider">Presença Regional</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mt-3">Dom Iraque Perto de Você</h2>
          <p class="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
            Consulte a disponibilidade dos nossos produtos em estabelecimentos parceiros próximos através da consulta por raio no detalhe de cada item do nosso catálogo. Por respeito à LGPD e à confidencialidade contratual, mantemos os registros de clientes e parceiros em ambiente restrito e seguro.
          </p>
          <a href="#catalogo" class="inline-flex mt-6 py-3.5 px-8 rounded-xl font-bold btn-primary text-sm shadow-md">
            Explorar Catálogo de Produtos
          </a>
        </div>
      </div>
    </section>

    <!-- SEÇÃO CONTATO COMERCIAL E COTAÇÃO -->
    <section id="contato" class="py-20 bg-brand-light border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div class="lg:col-span-5">
            <span class="text-brand-red text-xs font-extrabold uppercase tracking-wider">Atendimento Corporativo</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-black mt-2 mb-4">Solicite uma cotação com a equipe comercial</h2>
            <p class="text-gray-600 text-sm leading-relaxed mb-8">
              Atendemos compras no atacado com tabelas progressivas de volume. Preencha o formulário e nossa mesa de vendas entrará em contato em até 24 horas úteis.
            </p>

            <div class="space-y-4">
              <div class="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 card-shadow">
                <div class="w-10 h-10 rounded-lg bg-brand-red text-white flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <div class="text-xs text-gray-500 font-medium">WhatsApp Comercial & Vendas</div>
                  <div class="flex flex-col">
                    <a href="https://wa.me/5554984049311" target="_blank" rel="noopener noreferrer" class="text-sm font-bold text-brand-black hover:text-brand-red transition-colors">(54) 98404-9311</a>
                    <a href="tel:+555432811725" class="text-xs font-semibold text-gray-600 hover:text-brand-red transition-colors">Telefone Fixo: (54) 3281-1725</a>
                  </div>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 card-shadow">
                <div class="w-10 h-10 rounded-lg bg-brand-red text-white flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <div class="text-xs text-gray-500 font-medium">E-mail para Pedidos e Cotações</div>
                  <a href="mailto:comercial@domiraque.com.br" class="text-sm font-bold text-brand-black hover:text-brand-red transition-colors">comercial@domiraque.com.br</a>
                  <div class="text-[11px] text-gray-400 mt-0.5">telepizzadomiraque@hotmail.com</div>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 card-shadow">
                <div class="w-10 h-10 rounded-lg bg-brand-red text-white flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                </div>
                <div>
                  <div class="text-xs text-gray-500 font-medium">Fábrica e Centro de Distribuição</div>
                  <div class="text-sm font-semibold text-gray-800">Rua Farroupilha, 46 — Pousada da Neve</div>
                  <div class="text-xs text-gray-500">Nova Petrópolis – RS | CEP 95150-000</div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7">
            <form id="b2b-contact-form" class="p-8 sm:p-10 rounded-2xl bg-white border border-gray-200 card-shadow space-y-4">
              <h3 class="text-xl font-bold font-heading text-brand-black mb-2">Formulário de Cotação de Fornecimento</h3>
              
              <div id="form-alert" class="hidden p-4 rounded-xl bg-emerald-100 border border-emerald-400 text-emerald-800 text-xs font-semibold"></div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-gray-700 mb-1">Nome do Responsável *</label>
                  <input type="text" required placeholder="Seu nome completo" class="w-full px-4 py-3 rounded-xl bg-brand-light border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:border-brand-red focus:outline-none transition-colors" />
                </div>
                <div>
                  <label class="block text-xs font-bold text-gray-700 mb-1">Razão Social / Nome Fantasia *</label>
                  <input type="text" required placeholder="Nome da empresa" class="w-full px-4 py-3 rounded-xl bg-brand-light border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:border-brand-red focus:outline-none transition-colors" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-gray-700 mb-1">Segmento de Atuação *</label>
                  <select required class="w-full px-4 py-3 rounded-xl bg-brand-light border border-gray-300 text-gray-900 text-sm focus:border-brand-red focus:outline-none transition-colors">
                    <option value="supermarket">Supermercado / Rede Varejista</option>
                    <option value="distributor">Distribuidor / Atacadista</option>
                    <option value="bakery">Padaria / Mercearia</option>
                    <option value="restaurant">Restaurante / Hotel / Lanchonete</option>
                    <option value="other">Outro modelo de negócio</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-bold text-gray-700 mb-1">Telefone / WhatsApp Comercial *</label>
                  <input type="tel" required placeholder="(DDD) 90000-0000" class="w-full px-4 py-3 rounded-xl bg-brand-light border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:border-brand-red focus:outline-none transition-colors" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-gray-700 mb-1">E-mail Corporativo *</label>
                  <input type="email" required placeholder="contato@empresa.com.br" class="w-full px-4 py-3 rounded-xl bg-brand-light border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:border-brand-red focus:outline-none transition-colors" />
                </div>
                <div>
                  <label class="block text-xs font-bold text-gray-700 mb-1">Volume Estimado Mensal</label>
                  <input type="text" placeholder="Ex: 500 kg / 1.000 unidades" class="w-full px-4 py-3 rounded-xl bg-brand-light border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:border-brand-red focus:outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-gray-700 mb-1">Produtos de Interesse ou Mensagem *</label>
                <textarea id="form-message" rows="4" required placeholder="Descreva os produtos do catálogo que deseja cotar e a sua região de entrega..." class="w-full px-4 py-3 rounded-xl bg-brand-light border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:border-brand-red focus:outline-none transition-colors"></textarea>
              </div>

              <button type="submit" id="form-submit-btn" class="w-full py-4 px-6 rounded-xl font-bold btn-primary text-sm shadow-md flex items-center justify-center gap-2">
                <span>Enviar Solicitação de Cotação</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>

    <!-- RODAPÉ INSTITUCIONAL -->
    <footer class="bg-brand-black text-gray-400 pt-16 pb-8 text-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          <div class="lg:col-span-5">
            <div class="mb-4">
              <img src="${n(`/assets/brand/logo_hd.png`)}" alt="Dom Iraque" class="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <p class="text-xs text-gray-400 leading-relaxed mb-4 max-w-sm">
              Indústria de alimentos especializada no desenvolvimento, fabricação e distribuição de pães, pizzas, folhados e salgados congelados com padrão industrial para o mercado corporativo.
            </p>
            <div class="text-xs text-gray-400 mb-4 space-y-1">
              <div>📍 Rua Farroupilha, 46 — Pousada da Neve</div>
              <div>Nova Petrópolis – RS | CEP 95150-000</div>
              <div>📞 (54) 98404-9311 | (54) 3281-1725</div>
            </div>
            <span class="inline-block px-3 py-1 rounded bg-gray-900 border border-gray-800 text-brand-wheat text-[11px] font-semibold">
              Canal Exclusivo para Clientes Comerciais e Parceiros B2B
            </span>
          </div>

          <div class="lg:col-span-3">
            <h4 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Navegação</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="#inicio" class="hover:text-white transition-colors">Início</a></li>
              <li><a href="#catalogo" class="hover:text-white transition-colors">Catálogo de Produtos</a></li>
              <li><a href="#onde-comprar" class="hover:text-white transition-colors">Onde Comprar</a></li>
              <li><a href="#sobre" class="hover:text-white transition-colors">A Indústria</a></li>
              <li><a href="#segmentos" class="hover:text-white transition-colors">Segmentos Atendidos</a></li>
              <li><a href="#qualidade" class="hover:text-white transition-colors">Controle de Qualidade</a></li>
              <li><a href="#contato" class="hover:text-white transition-colors">Contato Comercial</a></li>
              <li class="pt-2 border-t border-gray-800"><a href="#admin" class="hover:text-brand-wheat transition-colors flex items-center gap-1.5 text-gray-500 font-semibold"><span>🔒</span> Área do Administrador</a></li>
            </ul>
          </div>

          <div class="lg:col-span-4">
            <h4 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Linhas de Produção</h4>
            <ul class="space-y-2 text-xs">
              ${e.filter(e=>e.id!==`all`).map(e=>`
                <li>
                  <button data-category="${e.id}" class="category-filter-btn hover:text-white transition-colors text-left">
                    ${e.name}
                  </button>
                </li>
              `).join(``)}
            </ul>
          </div>

        </div>

        <div class="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>© Dom Iraque Indústria de Alimentos — Todos os direitos reservados. Nova Petrópolis / RS.</div>
          <div class="flex gap-4">
            <span>Boas Práticas de Fabricação</span>
            <span>•</span>
            <span>Controle Térmico a -18°C</span>
            <span>•</span>
            <span>Portal Oficial B2B</span>
          </div>
        </div>

      </div>
    </footer>

    <!-- BOTÃO FLUTUANTE DO WHATSAPP COMERCIAL -->
    <a 
      href="https://wa.me/5554984049311?text=Olá!%20Gostaria%20de%20solicitar%20uma%20cotação%20para%20minha%20empresa%20com%20a%20Dom%20Iraque." 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp Comercial"
      class="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group border-2 border-white/40"
    >
      <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      <span class="text-xs font-extrabold tracking-wide hidden sm:inline">WhatsApp Comercial</span>
    </a>

    ${Y()}
  `}function Y(){return B?`
    <div id="image-zoom-backdrop" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div class="relative max-w-4xl w-full bg-[#18181B] rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl flex flex-col items-center">
        <!-- Botão Fechar -->
        <button id="close-image-zoom-btn" class="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg transition-colors z-20">
          ✕
        </button>

        <div class="w-full flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse"></span>
            <span class="text-xs font-bold uppercase tracking-wider text-brand-wheat">Estúdio Fotográfico Gastronômico • Dom Iraque</span>
          </div>
          <span class="text-xs text-gray-400 hidden sm:inline">Pressione ESC ou clique fora para fechar</span>
        </div>

        <div class="relative w-full max-h-[58vh] flex items-center justify-center p-6 rounded-2xl bg-black/40 border border-white/5 overflow-hidden">
          <div class="absolute inset-0 food-aura-intense pointer-events-none"></div>
          <img 
            src="${B.url}" 
            alt="${B.title}" 
            class="max-h-[48vh] max-w-full object-contain food-img-pop drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] z-10" 
          />
        </div>

        <div class="mt-6 w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div>
            <h3 class="text-lg sm:text-xl font-extrabold text-white font-heading">${B.title}</h3>
            <p class="text-xs text-gray-400 mt-0.5">Padrão industrial de alta resolução para catálogos, banners e gôndolas</p>
          </div>
          <a href="https://wa.me/5554984049311?text=${encodeURIComponent(`Olá! Gostaria de uma cotação no atacado para o produto ${B.title} da Dom Iraque.`)}" target="_blank" rel="noopener noreferrer" class="py-3 px-6 rounded-xl font-bold btn-primary text-xs sm:text-sm shadow-lg flex items-center gap-2 shrink-0">
            <span>Fazer Cotação deste Item</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>
    </div>
  `:``}function X(){let e=document.getElementById(`mobile-menu-btn`),t=document.getElementById(`mobile-menu`);e?.addEventListener(`click`,()=>{t?.classList.toggle(`hidden`)}),document.querySelectorAll(`.category-filter-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-category`);t&&(P=t,F?window.location.hash=`#catalogo`:(J(),X()))})}),document.querySelectorAll(`.navigate-product-btn, .navigate-card`).forEach(e=>{e.addEventListener(`click`,e=>{if(e.target.closest(`.open-zoom-btn`))return;let t=e.currentTarget.getAttribute(`data-navigate-id`);t&&U(t)})}),document.querySelectorAll(`.open-zoom-btn, .open-zoom-trigger`).forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation(),e.preventDefault();let t=e.currentTarget,n=t.getAttribute(`data-zoom-img`),r=t.getAttribute(`data-zoom-title`)||`Produto Dom Iraque`;n&&(B={url:n,title:r},K())})}),document.getElementById(`close-image-zoom-btn`)?.addEventListener(`click`,()=>{B=null,K()}),document.getElementById(`image-zoom-backdrop`)?.addEventListener(`click`,e=>{e.target.id===`image-zoom-backdrop`&&(B=null,K())});let n=document.getElementById(`b2b-contact-form`);n?.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`form-alert`),r=document.getElementById(`form-submit-btn`);r&&(r.setAttribute(`disabled`,`true`),r.innerHTML=`<span>Processando proposta...</span>`),setTimeout(()=>{t&&(t.textContent=`Solicitação enviada com sucesso! Nossa equipe comercial entrará em contato em até 24 horas úteis.`,t.classList.remove(`hidden`)),n.reset(),r&&(r.removeAttribute(`disabled`),r.innerHTML=`<span>Enviar Solicitação de Cotação</span>`)},800)})}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,H):H();async function Z(e){navigator.geolocation?(z=!0,L=null,R=``,F&&(q(F),X()),navigator.geolocation.getCurrentPosition(async t=>{try{let n={lat:t.coords.latitude,lng:t.coords.longitude};L=await o(e||F?.id||``,n)}catch(e){console.error(`Falha na consulta de disponibilidade:`,e),R=e?.message?.includes(`Firebase ainda não foi configurado`)?`O serviço de consulta por GPS está em fase de conexão com o banco de dados. Para saber onde encontrar este produto agora, entre em contato direto pelo WhatsApp Comercial!`:`Não foi possível consultar a disponibilidade no momento. Tente novamente em alguns instantes.`}finally{z=!1,F&&(q(F),X())}},e=>{z=!1,R=e.code===e.PERMISSION_DENIED?`A permissão de localização não foi concedida. Autorize o acesso no seu navegador para verificar parceiros próximos.`:`Não conseguimos obter sua localização. Verifique as configurações de GPS do seu aparelho e tente novamente.`,F&&(q(F),X())},{enableHighAccuracy:!1,timeout:12e3,maximumAge:6e4})):(R=`Seu navegador não oferece suporte à localização. Ative a localização ou tente em outro dispositivo.`,F&&(q(F),X()))}