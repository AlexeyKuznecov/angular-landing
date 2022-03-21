import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product!: Product;
  @Input() index!: number;
}
