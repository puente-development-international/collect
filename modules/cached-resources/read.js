import { residentIDQuery } from '../../services/parse/crud';

async function residentQuery(queryParams) {
  let records = await residentIDQuery(queryParams);
  records = JSON.parse(JSON.stringify(records));
  return records;
}

export { residentQuery };