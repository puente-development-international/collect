import { residentIDQuery } from '../../services/parse/crud';

export default async function residentQuery(queryParams) {
  let records = await residentIDQuery(queryParams);
  records = JSON.parse(JSON.stringify(records));
  return records;
}
