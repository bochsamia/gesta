import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'produit'
})
export class ProduitPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if (!items || !filter) {
        return items;
    }

    return items.filter(item => item.nom.toLowerCase().indexOf(filter.toLowerCase()) != -1);
    
}

}
