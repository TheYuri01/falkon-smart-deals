// Imagens locais dos banners do carrossel.
// Coloque os arquivos em src/assets/banners/ com esses nomes
// (ou ajuste os nomes abaixo para os arquivos que você já tem).
import banner1 from '../assets/banners/banner-1.png';
import banner2 from '../assets/banners/banner-2.png';
import banner3 from '../assets/banners/banner-3.png';
import banner1P from '../assets/banners/banner-1-P.png';
import banner2P from '../assets/banners/banner-2-P.png';
import banner3P from '../assets/banners/banner-3-P.png';

// Cada item agora contém a versão desktop e a versão mobile do banner.
const bannerImages = [
  { desktop: banner1, mobile: banner1P },
  { desktop: banner2, mobile: banner2P },
  { desktop: banner3, mobile: banner3P },
];

export default bannerImages;