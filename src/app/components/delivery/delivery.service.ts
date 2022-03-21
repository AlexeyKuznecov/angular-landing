import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Delivery, DeliveryResponse} from "../../models/delivery";

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  constructor(private http: HttpClient) {}

  send(data: Delivery): Observable<DeliveryResponse> {
    return this.http.post<DeliveryResponse>(environment.api.delivery, data);
  }
}
