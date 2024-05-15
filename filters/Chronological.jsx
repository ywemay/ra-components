import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { FilterList, FilterListItem } from 'react-admin';

import {
    endOfYesterday,
    startOfWeek,
    subWeeks,
    startOfMonth,
    subMonths,
} from 'date-fns';

const toCamelCase = function(str) {
  return str.replace(/[_\-]([^_\-])/g, function(_,$1){return $1.toUpperCase();});
}

/**
 * Chronology (timestamp fields) filter to use in aside bar filtering in lists.
 * 
 * @category Filters
 */
export default function ChronologicalFilter (props) {
  const { field, label, icon } = props;

  const filterVal = (min, max) => {
    const rez = {};
    rez[`${field}@gte`] = min;
    rez[`${field}@lte`] = max;
    return rez;
  }

  return (
    <FilterList 
      label={label || 'record.' + toCamelCase(field)} 
      icon={icon || <AccessTimeIcon />}
      >
      <FilterListItem
        label={"time.today"}
        value={filterVal(
             endOfYesterday().toISOString(),
             undefined,
        )}
      />
      <FilterListItem
        label={"time.thisWeek"}
        value={filterVal(
             startOfWeek(new Date()).toISOString(),
             undefined,
        )}
      />
      <FilterListItem
        label={"time.lastWeek"}
        value={filterVal(
             subWeeks(startOfWeek(new Date()), 1).toISOString(),
             startOfWeek(new Date()).toISOString(),
        )}
      />
      <FilterListItem
        label={"time.thisMonth"}
        value={filterVal(
             startOfMonth(new Date()).toISOString(),
             undefined,
        )}
      />
      <FilterListItem
        label={"time.lastMonth"}
        value={filterVal(
             subMonths(startOfMonth(new Date()),1).toISOString(),
             startOfMonth(new Date()).toISOString(),
        )}
      />
      <FilterListItem
        label={"time.earlier"}
        value={filterVal(
             undefined,
             subMonths(startOfMonth(new Date()),1).toISOString(),
        )}
      />
    </FilterList>
  );
}
