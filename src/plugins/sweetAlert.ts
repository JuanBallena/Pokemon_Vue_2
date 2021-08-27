import Swal from "sweetalert2";

export function successMessage(text: string) {
  Swal.fire({
    icon: 'success',
    title: 'Éxito',
    text: `${text}`,
  })
}

export function infoMessage(text: string) {
  Swal.fire({
    icon: 'info',
    title: 'Información',
    text: `${text}`,
  })
}

export function errorMessage(text: string) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: `${text}`,
  })
}

export function confirm(text: string) {
  return Swal.fire({
    title: 'Confirmar',
    text: `${text}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#607D8B',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si, eliminar'
  }).then((result) => {
    if(result.value){
      return result.value
    }
  })
}