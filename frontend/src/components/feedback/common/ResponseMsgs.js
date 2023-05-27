import Swal from 'sweetalert2'

function successMsg(msg) {
    return Swal.fire({
        icon: 'success',
        title: msg,
        text: ''
      })
}

function errorMsg(msg) {
    Swal.fire({
        icon: 'error',
        title: msg,
        text: ''
      })
}

export { successMsg, errorMsg }