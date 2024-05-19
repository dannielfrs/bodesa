import { DataTable as DataTablePrime } from 'primereact/datatable'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { Column } from 'primereact/column'
import { FilterMatchMode } from 'primereact/api'
import { Skeleton } from 'primereact/skeleton'

export const DataTable = ({
  data = [],
  columns = [],
  numberRows = 10,
  variant = 'primary',
  search = '',
  searchStatus,
  headerFilters = '',
  loading = false,
  paginatorNone = false,
  scrollable,
  scrollHeight,
  noSort = false,
  selectionMode,
  selection,
  onSelectionChange,
  onRowSelect,
  editMode,
  editor,
  onCellEditComplete,
  rowHeight = '50px',
  className = ''
}) => {
  const filters = {
    global: { value: search, matchMode: FilterMatchMode.CONTAINS },
    status: { value: searchStatus, matchMode: FilterMatchMode.EQUALS }
  }

  const bodyTemplate = () => {
    return <Skeleton />
  }

  const paginatorTemplate = () => {
    return {
      layout: 'CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
      CurrentPageReport: (options) => {
        return (
          <div className={styles.datatable_footer}>
            Mostrando{' '}
            <span className='fw-bold'>{options.first}</span>-
            <span className='fw-bold'>{options.last}</span> de{' '}
            <span className='fw-bold'>{options.totalRecords}</span>{' '}
            registros
          </div>
        )
      }
    }
  }

  const bodyColumn = (column) => {
    if (column?.body) {
      return column?.body
    } else { return '' }
  }

  return (
    <div className={`${styles.datatable} ${styles[variant]} ${className}`}>
      <DataTablePrime
        value={data}
        loading={loading}
        responsiveLayout='scroll'
        paginator={!paginatorNone}
        paginatorTemplate={!loading && paginatorTemplate(data)}
        rows={numberRows}
        filters={filters}
        header={headerFilters}
        scrollable={scrollable}
        scrollHeight={scrollHeight}
        stripedRows
        emptyMessage='No se encontraron resultados'
        selectionMode={loading ? '' : selectionMode}
        selection={selection}
        onSelectionChange={onSelectionChange}
        onRowSelect={onRowSelect}
        editMode={editMode}
      >
        {
          columns?.map((column, index) => (
            <Column
              key={index}
              field={column?.field}
              header={column?.header}
              body={loading ? bodyTemplate : bodyColumn(column)}
              editor={column?.body ? '' : editor}
              onCellEditComplete={onCellEditComplete}
              sortable={!noSort ? !loading : false}
              className={styles.datatable_column}
              style={{
                minWidth: `${column.w}`,
                width: `${column.w}`,
                textAlign: `${column.t}`,
                height: `${rowHeight}`,
                minHeight: `${rowHeight}`
              }}
              frozen={column.frozen}
            />
          ))
        }
      </DataTablePrime>
    </div>
  )
}

DataTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array.isRequired,
  numberRows: PropTypes.number,
  search: PropTypes.string,
  loading: PropTypes.bool,
  paginatorNone: PropTypes.bool,
  noSort: PropTypes.bool
}
