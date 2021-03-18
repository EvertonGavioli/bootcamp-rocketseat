import Numeral from 'numeral';
import 'numeral/locales/pt-br';

Numeral.locale('pt-br');

export function formatPrice(price) {
  const numeralPrice = Numeral(price);
  return numeralPrice.format('$0.00');
}
