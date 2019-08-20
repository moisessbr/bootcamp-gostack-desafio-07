import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function formatPrice(price) {
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
  return formatted;
}
