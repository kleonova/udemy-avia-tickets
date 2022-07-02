import "materialize-css/dist/js/materialize.min";
import "materialize-css/dist/css/materialize.min.css";

// Init Select
const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(element) {
    return M.FormSelect.getInstance(element);
}

// Init Autocomplete
const allAutocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(allAutocomplete);

export function getAutocompleteInstance(elem) {
    return M.Autocomplete.getInstance(elem);
}

// Init Datepicker
const datepickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers);

export function getDatePickerInstance(elem) {
    return M.Datepicker.getInstance(elem);
}