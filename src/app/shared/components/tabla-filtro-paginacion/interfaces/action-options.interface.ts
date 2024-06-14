export interface ActionOptions {
  visible: boolean; //indica si se debe mostrar la columna acciones en la tabla
  viewAction?: (row: Object) => void; // se pasa la funcion con la logica a implementar para dicha opcion
  editAction?: (row: Object) => void; // se pasa la funcion con la logica a implementar para dicha opcion
  deleteAction?: (row: Object) => void; // se pasa la funcion con la logica a implementar para dicha opcion
}
