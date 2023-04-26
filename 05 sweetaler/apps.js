const e1=()=>{
  Swal.fire('Bienvenido a la compra de autos ')
}

const e2=()=>{
  Swal.fire(
      'autos ',
      'te gusta este tipo de autos',
      'silverado'
    )
}

const e3=()=>{
  Swal.fire({
      icon: 'good',
      title: 'todo salio bien',
      text: 'el auto es tullo',
      footer: '<a href="img.jpg">quieres ver fotos de auto</a>'
    })
}
const e4=()=>{
  Swal.fire({
      title: '<strong>auto <u>total mente tuyo</u></strong>',
      icon: 'info',
      html:
        'los mejores autos <b>para ti</b>, ' +
        '<a href="https://www.chevrolet.com.mx/pickups/silverado-camioneta-de-trabajo/especificaciones-automotriz">links</a> ' +
        'detalles del auto',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    })
  }

const e5=()=>{
  Swal.fire({
      title: 'deseas guardar esa informacion?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'guardar',
      denyButtonText: `no guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
}