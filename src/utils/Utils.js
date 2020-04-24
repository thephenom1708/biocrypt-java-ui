import Swal from 'sweetalert2'

export const successAlert = (title, text) => {
    Swal.fire({
        title: title,
        text: text,
        icon: 'success'
    })

}

export const errorAlert = (title="Oops...", text="Something went wrong!") => {
    Swal.fire({
        icon: 'error',
        title: title,
        text: text
    });

}