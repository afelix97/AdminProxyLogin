import { Injectable } from '@angular/core';
import { ContentConfigurationInterface } from '../interfaces/content-configuration.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingProxyServices {

  getSettingsProxy():ContentConfigurationInterface[]{
    return [
      {
        "content_configuration_id": 373,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "50015","url": "http://<ip>:<port>/transaction/fun_acceso_usuario"}',
        "type": "SMAIL",
        "category": "TRAN_FAU",
        "creation_date": "2022-03-28 18:31:30",
        "change_date": "2022-03-28 18:31:30",
        "created_by": "JOEL SILVA LOPEZ",
        "changed_by": "JOEL SILVA LOPEZ",
        "version": 1
      },
      {
        "content_configuration_id": 381,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "50015","url": "http://<ip>:<port>/function"}',
        "type": "BANCO",
        "category": "EXEC_QUERY",
        "creation_date": "2022-03-28 18:31:30",
        "change_date": "2022-03-28 18:31:30",
        "created_by": "JOEL SILVA LOPEZ",
        "changed_by": "JOEL SILVA LOPEZ",
        "version": 1
      },
      {
        "content_configuration_id": 200,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "20000","url": "http://<ip>:<port>/credenciales/getAllCredenciales"}',
        "type": "OFA",
        "category": "OBTENERCREDENCIALES",
        "creation_date": "2020-08-26 11:10:31.",
        "change_date": "2020-08-26 11:10:31.",
        "created_by": "ROQUE RUIZ CABANILLAS",
        "changed_by": "ROQUE RUIZ CABANILLAS",
        "version": 0
      },
      {
        "content_configuration_id": 201,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "20000","url": "http://<ip>:<port>/credenciales/getCredencial"}',
        "type": "OFA",
        "category": "OBTENERCREDENCIAL",
        "creation_date": "2020-08-31 15:38:33.",
        "change_date": "2020-08-31 15:38:33.",
        "created_by": "ROQUE RUIZ CABANILLAS",
        "changed_by": "ROQUE RUIZ CABANILLAS",
        "version": 0
      },
      {
        "content_configuration_id": 388,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "50015","url": "http://<ip>:<port>/function"}',
        "type": "SMAIL",
        "category": "EXEC_QUERY",
        "creation_date": "2022-03-28 18:31:30",
        "change_date": "2022-03-28 18:31:30",
        "created_by": "JOEL SILVA LOPEZ",
        "changed_by": "JOEL SILVA LOPEZ",
        "version": 1
      },
      {
        "content_configuration_id": 389,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "50015","url": "http://<ip>:<port>/transaction/fun_acceso_valida_usuario"}',
        "type": "SMAIL",
        "category": "TRAN_FAVU",
        "creation_date": "2022-03-28 18:31:30",
        "change_date": "2022-03-28 18:31:30",
        "created_by": "JOEL SILVA LOPEZ",
        "changed_by": "JOEL SILVA LOPEZ",
        "version": 1
      },
      {
        "content_configuration_id": 206,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "20032","url": "http://<ip>:<port>/function"}',
        "type": "DERECHO_LOGIN",
        "category": "EXEC_QUERY",
        "creation_date": "2021-08-13 19:16:25.",
        "change_date": "2021-08-13 19:16:25.",
        "created_by": "JOEL SILVA LOPEZ",
        "changed_by": "JOEL SILVA LOPEZ",
        "version": 1
      },
      {
        "content_configuration_id": 158,
        "name": "FILIALES",
        "value": '{"type": "POST","ip": "10.50.1.106","port": "58080","url": "http://<ip>:<port>/colaborapp/api/v1/filiales/clave"}',
        "type": "EMPLEADOS_APP",
        "category": "CLAVES_APP",
        "creation_date": "2022-10-07 11:25:23.",
        "change_date": "2022-10-07 11:25:23.",
        "created_by": "JESUS MANUEL CORTEZ NUNEZ",
        "changed_by": "JESUS MANUEL CORTEZ NUNEZ",
        "version": 1
      },
      {
        "content_configuration_id": 33,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "50005","url": "http://<ip>:<port>/function"}',
        "type": "GASTOS_DE_VIAJE",
        "category": "EXEC_QUERY",
        "creation_date": "2022-03-30 22:11:23.",
        "change_date": "2022-03-30 22:11:23.",
        "created_by": "JOSE CARLOS SILVA",
        "changed_by": "JOSE CARLOS SILVA",
        "version": 0
      },
      {
        "content_configuration_id": 9,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "20040","url": "http://<ip>:<port>/transaction/fun_exhatenderoc"}',
        "type": "PORTAL_PROV",
        "category": "TRAN_EA",
        "creation_date": "2022-03-30 22:11:21.",
        "change_date": "2022-03-30 22:11:21.",
        "created_by": "JOSE CARLOS SILVA",
        "changed_by": "JOSE CARLOS SILVA",
        "version": 0
      },
      {
        "content_configuration_id": 10,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "20040","url": "http://<ip>:<port>/transaction/fun_exhcancelarordendecompra"}',
        "type": "PORTAL_PROV",
        "category": "TRAN_ECTC",
        "creation_date": "2022-03-30 22:11:21.",
        "change_date": "2022-03-30 22:11:21.",
        "created_by": "JOSE CARLOS SILVA",
        "changed_by": "JOSE CARLOS SILVA",
        "version": 0
      },
      {
        "content_configuration_id": 17,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "20040","url": "http://<ip>:<port>/transaction/fun_modificarmaster"}',
        "type": "PORTAL_PROV",
        "category": "TRAN_PPMM",
        "creation_date": "2022-03-30 22:11:21.",
        "change_date": "2022-03-30 22:11:21.",
        "created_by": "JOSE CARLOS SILVA",
        "changed_by": "JOSE CARLOS SILVA",
        "version": 0
      },
      {
        "content_configuration_id": 18,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "20040","url": "http://<ip>:<port>/transaction/fun_exhsalidamercanciamudanza"}',
        "type": "PORTAL_PROV",
        "category": "TRAN_PPEMM",
        "creation_date": "2022-03-30 22:11:21.",
        "change_date": "2022-03-30 22:11:21.",
        "created_by": "JOSE CARLOS SILVA",
        "changed_by": "JOSE CARLOS SILVA",
        "version": 0
      },
      {
        "content_configuration_id": 4,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "20040","url": "http://<ip>:<port>/function"}',
        "type": "PORTAL_PROV",
        "category": "EXEC_QUERY",
        "creation_date": "2022-03-30 22:11:21.",
        "change_date": "2022-03-30 22:11:21.",
        "created_by": "JOSE CARLOS SILVA",
        "changed_by": "JOSE CARLOS SILVA",
        "version": 0
      },
      {
        "content_configuration_id": 417,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "50040","url": "http://<ip>:<port>/function"}',
        "type": "WSRFACTURACION",
        "category": "EXEC_QUERY",
        "creation_date": "2022-03-31 10:26:15.",
        "change_date": "2022-03-31 10:26:15.",
        "created_by": "MIGUEL SANJUAN",
        "changed_by": "MIGUEL SANJUAN",
        "version": 1
      },
      {
        "content_configuration_id": 34,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "50007","url": "http://<ip>:<port>/function/fun_emisorrfc_ff_fs_ffofi_faedatosproveedor"}',
        "type": "PORTALES_PROV",
        "category": "FUN_CCFDPROV",
        "creation_date": "2022-03-31 10:45:",
        "change_date": "2022-03-31 10:45:",
        "created_by": "JOSE CARLOS SILVA",
        "changed_by": "JOSE CARLOS SILVA",
        "version": 0
      },
      {
        "content_configuration_id": 35,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "50012","url": "http://<ip>:<port>/function"}',
        "type": "PROV_CI",
        "category": "EXEC_QUERY",
        "creation_date": "2022-04-06 19:14:49.",
        "change_date": "2022-04-06 19:14:49.",
        "created_by": "JOEL SILVA LOPEZ",
        "changed_by": "JOEL SILVA LOPEZ",
        "version": 1
      },
      {
        "content_configuration_id": 36,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "20101","url": "http://<ip>:<port>/function"}',
        "type": "PVD_NEPTUNO",
        "category": "EXEC_QUERY",
        "creation_date": "2022-04-06 19:14:49",
        "change_date": "2022-04-06 19:14:49",
        "created_by": "JOSE CARLOS SILVA",
        "changed_by": "JOSE CARLOS SILVA",
        "version": 1
      },
      {
        "content_configuration_id": 37,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "20101","url": "http://<ip>:<port>/function"}',
        "type": "PROV_VARIOS",
        "category": "EXEC_QUERY",
        "creation_date": "2022-04-06 19:14:49.",
        "change_date": "2022-04-06 19:14:49.",
        "created_by": "JOSE CARLOS SILVA",
        "changed_by": "JOSE CARLOS SILVA",
        "version": 0
      },
      {
        "content_configuration_id": 38,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "50016","url": "http://<ip>:<port>/function"}',
        "type": "LISTCOBRANZA",
        "category": "EXEC_QUERY",
        "creation_date": "2022-04-06 19:14:49.",
        "change_date": "2022-04-06 19:14:49.",
        "created_by": "JOSE CARLOS SILVA",
        "changed_by": "JOSE CARLOS SILVA",
        "version": 0
      },
      {
        "content_configuration_id": 39,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "50016","url": "http://<ip>:<port>/function/fun_impresionlistado"}',
        "type": "LISTCOBRANZA",
        "category": "FUNC_IML",
        "creation_date": "2022-04-06 19:14:49.",
        "change_date": "2022-04-06 19:14:49.",
        "created_by": "JOSE CARLOS SILVA",
        "changed_by": "JOSE CARLOS SILVA",
        "version": 0
      },
      {
        "content_configuration_id": 40,
        "name": "REMEDIACIONES",
        "value": '{"type": "POST","ip": "127.0.0.1","port": "50016","url": "http://<ip>:<port>/function/fun_impresionlistadobu2"}',
        "type": "LISTCOBRANZA",
        "category": "FUNC_IB2",
        "creation_date": "2022-04-06 19:14:49.",
        "change_date": "2022-04-06 19:14:49.",
        "created_by": "JOSE CARLOS SILVA",
        "changed_by": "JOSE CARLOS SILVA",
        "version": 0
      }
    ]
  }
}
