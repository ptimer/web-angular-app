export type Link = string;

export interface WorkItem {
  originator: string;
  client: string;
  line: string;
  type: string;
  status: string;
  created: string;
}