export interface Chat {
  username: string;
  message: string;
  type: ChatType;
  time?: string;
}

export type ChatType = 'sender' | 'info' | 'received';
