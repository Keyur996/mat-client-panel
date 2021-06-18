import { ClientService } from './../../services/client.service';
import { Client } from './../../models/client.model';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'email', 'city', 'birthDay', 'id'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  clients: Client[] = [];

  constructor(
    private _client: ClientService,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this._client.getClients().subscribe(({ data, message }) => {
      this.clients = data;
      this.dataSource = new MatTableDataSource<Client>(this.clients);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.clients, this.dataSource, this.paginator);
    });
  }

  deleteClient(id: string) {
    console.log(id);
    this._client.deleteClient(id).subscribe((res) => {
      console.log(res);
      this.getClients();
      this._cdr.detectChanges();
    });
  }
}
