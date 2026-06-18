import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import '../styles/ProductGrid.css';

export default function ProductGrid() {

  return (
    <div>

      <main class="products-grid">

      {/* Produto 1 */}
        <div class="product-card">
          <div class="discount-badge">30% OFF ▼</div>
          <img src="https://images8.kabum.com.br/produtos/fotos/520368/processador-amd-ryzen-5-5600gt-3-6-ghz-4-6ghz-max-turbo-cache-4mb-6-nucleos-12-threads-am4-100-100001488box_1708024586_gg.jpg" alt="Processador AMD Ryzen 5" class="product-image" />
          <div>
            <div class="tag-container">
              <span class="tag tag-shipping">Frete Grátis</span>
              <span class="tag tag-status">2º Mais vendido</span>
            </div>
            <h3 class="product-title">Processador AMD Ryzen 5 5600GT 3.6GHz (4.6GHz Turbo), 6-Cores 12-Threads</h3>
            <div class="rating">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              <span class="rating-count">(276)</span>
            </div>
          </div>
          <div>
            <div class="product-price">R$ 879,90 <span class="price-cash">à vista</span></div>
            <div class="installment">12x de R$ 86,27 sem juros</div>
          </div>
        </div>

      {/* Produto 2 */}
        <div class="product-card">
          <div class="discount-badge">10% OFF ▼</div>
          <img src="https://images0.kabum.com.br/produtos/fotos/sync_mirakl/649800/xlarge/Smart-TV-50-Polegadas-Philips-4K-UHD-Google-TV-Dolby-Audio-50pug7019-78_1781717921.jpg" alt="Smart TV Philips" class="product-image" />
          <div>
            <div class="tag-container">
              <span class="tag tag-shipping">Frete Grátis</span>
              <span class="tag tag-status">7º Mais vendido</span>
            </div>
            <h3 class="product-title">PHILIPS Smart TV, 50" 4K UHD, 50PUG7019/78, Google TV, Comando de Voz, HDR</h3>
            <div class="rating">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
              <span class="rating-count">(113)</span>
            </div>
          </div>
          <div>
            <div class="product-price">R$ 2.099,90 <span class="price-cash">à vista</span></div>
            <div class="installment">12x de R$ 208,27 sem juros</div>
          </div>
        </div>

      {/* Produto 3 */}
        <div class="product-card">
          <div class="discount-badge">10% OFF ▼</div>
          <img src="https://images3.kabum.com.br/produtos/fotos/sync_mirakl/816883/xlarge/Placa-De-V-deo-RTX-5070-1-Click-Oc-2x-Nvidia-Galax-12GB-192-Bits-3x-Displayport-HDMI-57non7mdbroc_1777465121.jpg" alt="GPU PNY GeForce RTX 5070" class="product-image"/>
            <div>
              <div class="tag-container">
                <span class="tag tag-shipping">Frete Grátis</span>
                <span class="tag tag-status">5º Mais vendido</span>
              </div>
              <h3 class="product-title">Placa De Vídeo RTX 5070 1 Click Oc 2x Nvidia Galax, 12GB</h3>
              <div class="rating">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                <span class="rating-count">(31)</span>
              </div>
            </div>
            <div>
              <div class="product-price">R$ 5.199,90 <span class="price-cash">à vista</span></div>
              <div class="installment">12x de R$ 509,79 sem juros</div>
            </div>
        </div>

      {/* Produto 4 */}
        <div class="product-card">
          <div class="discount-badge">20% OFF ▼</div>
          <img src="https://images1.kabum.com.br/produtos/fotos/952751/monitor-gamer-curvo-asus-tuf-34-wqhd-250hz-0-5ms-fast-va-freesync-premium-altura-ajustavel-som-integrado-preto-vg34wqml5a_1779197880_gg.jpg" alt="Monitor Gamer Asus TUF" class="product-image" />
          <div>
            <div class="tag-container">
              <span class="tag tag-shipping">Frete Grátis</span>
              <span class="tag tag-status">10º Mais vendido</span>
            </div>
            <h3 class="product-title">Monitor Gamer Asus TUF Gaming, 34, Curvo, WQHD, 0.5ms, 250hz, FreeSync Premium</h3>
            <div class="rating">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              <span class="rating-count">(68)</span>
            </div>
          </div>
          <div>
            <div class="product-price">R$ 1.999,99 <span class="price-cash">à vista</span></div>
            <div class="installment">12x de R$ 196,08 sem juros</div>
          </div>
        </div>

      {/* Produto 5 */}
        <div class="product-card">
          <div class="discount-badge">10% OFF ▼</div>
          <img src="https://images2.kabum.com.br/produtos/fotos/904662/processador-intel-core-i9-14900f-ate-5-80-ghz-cache-36mb-nucleos-24-threads-32-bx8071514900f_1754311046_gg.jpg" alt="Processador Intel Core i9" class="product-image"/>
          <div>
            <div class="tag-container">
              <span class="tag tag-shipping">Frete Grátis</span>
              <span class="tag tag-status">Melhor Preço</span>
            </div>
            <h3 class="product-title">Processador Intel Core i9 14900F, 3.6 GHz (5.8GHz Turbo), 24-Cores 32-Threads</h3>
            <div class="rating">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              <span class="rating-count">(53)</span>
            </div>
          </div>
          <div>
            <div class="product-price">R$ 3.639,99 <span class="price-cash">à vista</span></div>
            <div class="installment">12x de R$ 356,86 sem juros</div>
          </div>
        </div>

      {/* Produto 6 */}
        <div class="product-card">
          <div class="discount-badge">20% OFF ▼</div>
          <img src="https://images5.kabum.com.br/produtos/fotos/sync_mirakl/495635/xlarge/Mem-ria-Xpg-Spectrix-D35-8GB-1x8GB-3200mhz-DDR4-Preto_1775857117.jpg" alt="Memória RAM XPG" class="product-image" />
          <div>
            <div class="tag-container">
              <span class="tag tag-shipping">Frete Grátis</span>
              <span class="tag tag-status">Oferta</span>
            </div>
            <h3 class="product-title">Memória DDR4 XPG GAMMIX D35, 8GB, 3200MHz, Black, AX4U32008G16A-SBKD35</h3>
            <div class="rating">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              <span class="rating-count">(118)</span>
            </div>
          </div>
          <div>
            <div class="product-price">R$ 299,90 <span class="price-cash">à vista</span></div>
            <div class="installment">12x de R$ 29,40 sem juros</div>
          </div>
        </div>

      {/* Produto 7 */}
        <div class="product-card">
          <div class="discount-badge">25% OFF ▼</div>
          <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/1/11726-7154525.jpg" alt="Cadeira Escritório DT3" class="product-image" />
          <div>
            <div class="tag-container">
              <span class="tag tag-shipping">Frete Grátis</span>
              <span class="tag tag-status">5ª Mais vendida</span>
            </div>
            <h3 class="product-title">Cadeira De Escritório DT3 Diana V2, Ajustável, Ergonômica, 3D, Mesh, Preto</h3>
            <div class="rating">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
              <span class="rating-count">(57)</span>
            </div>
          </div>
          <div>
            <div class="product-price">R$ 1.179,90 <span class="price-cash">à vista</span></div>
            <div class="installment">12x de R$ 115,68 sem juros</div>
          </div>
        </div>

      {/* Produto 8 */}
        <div class="product-card">
          <div class="discount-badge">20% OFF ▼</div>
          <img src="https://images8.kabum.com.br/produtos/fotos/461178/headset-gamer-hyperx-cloud-stinger-2-core-drivers-40mm-preto-683l9aa_1688585917_gg.jpg" alt="Headset HyperX" class="product-image" />
          <div>
            <div class="tag-container">
              <span class="tag tag-shipping">Frete Grátis</span>
              <span class="tag tag-status">Novo</span>
            </div>
            <h3 class="product-title">Headset Gamer HyperX Cloud Stinger 2 Core, PC, X Spatial Audio, Preto</h3>
            <div class="rating">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
              <span class="rating-count">(443)</span>
            </div>
          </div>
          <div>
            <div class="product-price">R$ 192,20 <span class="price-cash">à vista</span></div>
            <div class="installment">12x de R$ 22,39 sem juros</div>
          </div>
        </div>

        </main >
    </div >
  );
}
