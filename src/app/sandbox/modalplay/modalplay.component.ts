import {Component, OnInit, TemplateRef} from '@angular/core';
import {ModalDismissReasons, NgbActiveModal, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalplay',
  templateUrl: './modalplay.component.html',
  styleUrls: ['./modalplay.component.scss'],
})
export class ModalplayComponent {
  closeResult = '';
  modalRef!: NgbModalRef;

  constructor(private modalService: NgbModal) {
  }

  open(content: TemplateRef<any>) {
    this.modalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  saveandclose(): void {
    this.modalRef.close("Save Button")
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
