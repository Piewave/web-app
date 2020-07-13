/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { ClientsService } from '../clients.service';

/**
 * Client Actions data resolver.
 */
@Injectable()
export class ClientActionsResolver implements Resolve<Object> {

  /**
   * @param {ClientsService} clientsService Clients service.
   */
  constructor(private clientsService: ClientsService) { }

  /**
   * Returns the clients actions data.
   * @param {ActivatedRouteSnapshot} route Route Snapshot
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const actionName = route.paramMap.get('name');
    const clientId = route.paramMap.get('clientId') || route.parent.parent.paramMap.get('clientId');
    switch (actionName) {
      case 'Assign Staff':
      case 'Update Default Savings':
        return this.clientsService.getClientDataAndTemplate(clientId);
      case 'Survey':
        return this.clientsService.getSurveys(clientId);
      case 'Close':
        return this.clientsService.getClientCommandTemplate('close');
      case 'Reject':
        return this.clientsService.getClientCommandTemplate('reject');
      case 'Withdraw':
        return this.clientsService.getClientCommandTemplate('withdraw');
      case 'Transfer Client':
        return this.clientsService.getOffices();
      default:
        return undefined;
    }
  }

}
