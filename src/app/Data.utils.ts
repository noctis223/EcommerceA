import { format } from 'date-fns';
import { it, enUS } from 'date-fns/locale';

export function formattaDataOra(data: Date, lingua: 'it' | 'en'): string {
  const formato = lingua === 'it' ? 'EEEE dd MMMM yyyy HH:mm:ss' : 'EEEE, MMMM dd, yyyy h:mm:ss a';
  const opzioni = { locale: lingua === 'it' ? it : enUS };
  return format(data, formato, opzioni);
}

export function formattaDataOranon(data: Date, lingua: 'it' | 'en' = 'it'): string {
  const formato = lingua === 'it' ? 'EEEE dd MMMM yyyy' : 'EEEE, MMMM dd, yyyy';
  const opzioni = { locale: lingua === 'it' ? it : enUS };
  return format(data, formato, opzioni);
}
