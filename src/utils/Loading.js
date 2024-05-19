import Swal from 'sweetalert2'
import loading from '@/../public/images/icons/loadingGif.gif'
import alert from '@/../public/images/icons/advertament.svg'
import success from '@/../public/images/icons/checked.svg'

export function Loading (titleP, textModal = 'Espere un momento...') {
  Swal.fire({
    title: titleP,
    text: textModal,
    iconHtml: `<img src="${loading.src}" style="width: 42px;height: 42px;" >`,
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
      title: 'titleModal',
      popup: 'fontFamily'
    }
  })
}

export function Success (titleP, textModal = 'Los datos proporcionados son correctos') {
  Swal.fire({
    title: titleP,
    text: textModal,
    iconHtml: `<img src="${success.src}" style="width: 40px;height: 40px;" >`,
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
      title: 'titleModal',
      popup: 'fontFamily'
    }
  })
}

export function Alert (titleP, textModal = 'Los datos proporcionados son incorrectos') {
  Swal.fire({
    title: titleP,
    text: textModal,
    iconHtml: `<img src="${alert.src}" style="width: 47px;height: 47px;" >`,
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
      title: 'titleModal',
      popup: 'fontFamily'
    }
  })
}

export function Delete (titleP, Confirm, textModal = 'El registro se eliminará') {
  Swal.fire({
    title: titleP,
    text: textModal,
    showDenyButton: true,
    iconHtml: `<img src="${alert.src}" style="width: 60px;height: 60px;" >`,
    confirmButtonText: 'Eliminar',
    denyButtonText: 'Cancelar',
    customClass: {
      title: 'titleModal',
      popup: 'fontFamily'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Confirm()
    } else if (result.isDenied) {
      Swal.close()
    }
  })
}
