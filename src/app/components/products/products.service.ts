import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.api.products);
  }
}
