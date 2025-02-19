
function mostrarAlerta() {
    Swal.fire({
        title: '¿Estás seguro de que quieres borrar esta materia?',
        text: "No podrás revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, continuar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '¡Confirmado!',
                'La acción se ha realizado.',
                'success'
            );
        }
    });
}

function jiji(){
    Swal.fire({
        title: "quieres cambiar las cosas?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "si guardar",
        denyButtonText: `no guardar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Guardado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("borrado", "", "info");
        }
      });
}

function buja(){
  Swal.fire({
    title: "هل تريد الاستمرار؟",
    icon: "question",
    iconHtml: "؟",
    confirmButtonText: "نعم",
    cancelButtonText: "لا",
    showCancelButton: true,
    showCloseButton: true
  });

}

function huju(){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });

}