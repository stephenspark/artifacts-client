import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BaseAPIResponse,
  Character,
  Gold,
  Item,
  SimpleItem,
} from '../../../shared/models/artifacts';
import { SERVICE_GROUP } from '../../../interceptors/auth/headers/auth-headers.interceptor';

export type ItemSlot =
  | 'weapon'
  | 'shield'
  | 'helmet'
  | 'body_armor'
  | 'leg_armor'
  | 'boots'
  | 'ring1'
  | 'ring2'
  | 'amulet'
  | 'artifact1'
  | 'artifact2'
  | 'artifact3'
  | 'consumable1'
  | 'consumable2';

export type CooldownReason =
  | 'movement'
  | 'fight'
  | 'crafting'
  | 'gathering'
  | 'buy_ge'
  | 'sell_ge'
  | 'delete_item'
  | 'deposit_bank'
  | 'withdraw_bank'
  | 'equip'
  | 'unequip'
  | 'task'
  | 'recycling';

export interface DestinationResponse {
  name: string;
  x: number;
  y: number;
  content: string;
}

export interface Cooldown {
  total_seconds: number;
  remaining_seconds: number;
  started_at: string;
  expiration: string;
  reason: CooldownReason;
}

export interface CharacterMovementData {
  data: {
    cooldown: Cooldown;
    destination: DestinationResponse;
    character: Character;
  };
}

export interface EquipRequest {
  data: {
    cooldown: Cooldown;
    slot: ItemSlot;
    item: Item;
    character: Character;
  };
}

export interface Drop {
  code: string;
  quantity: number;
}

export interface BlockedHits {
  fire: number;
  earth: number;
  water: number;
  air: number;
  total: number;
}

export type FightResult = 'win' | 'lose';

export interface Fight {
  xp: number;
  gold: number;
  drops: Drop[];
  turns: number;
  monster_blocked_hits: BlockedHits;
  player_blocked_hits: BlockedHits;
  logs: string[];
  result: FightResult;
}

export interface CharacterFightData {
  data: {
    cooldown: Cooldown;
    fight: Fight;
    character: Character;
  };
}

export interface SkillInfo {
  xp: number;
  items: Drop[];
}

export interface SkillData {
  data: {
    cooldown: Cooldown;
    details: SkillInfo;
    character: Character;
  };
}

export interface BankItem {
  data: {
    cooldown: Cooldown;
    item: Item;
    bank: SimpleItem[];
    character: Character;
  };
}

export interface GoldTransaction {
  data: {
    cooldown: Cooldown;
    bank: Gold;
    character: Character;
  };
}

export interface RecyclingItem {
  items: Drop[];
}

export interface RecyclingData {
  data: {
    cooldown: Cooldown;
    details: RecyclingItem[];
    character: Character;
  };
}

export interface GETransaction {
  code: string;
  quantity: number;
  price: number;
  total_price: number;
}

export interface GETransactionList {
  data: {
    cooldown: Cooldown;
    transactions: GETransaction;
    character: Character;
  };
}

export type TaskTypes = 'monsters' | 'resources' | 'crafts';

export interface Task {
  code: string;
  type: TaskTypes;
  character: Character;
}

export interface TaskData {
  data: {
    cooldown: Cooldown;
    task: string;
    character: Character;
  };
}

export interface TaskReward {
  code: string;
  quantity: number;
}

export interface TaskRewardData {
  data: {
    cooldown: Cooldown;
    reward: TaskReward;
    character: Character;
  };
}

export interface DeleteItem {
  data: {
    cooldown: Cooldown;
    item: SimpleItem;
    character: Character;
  };
}

export interface Log {
  charcter: string;
  account: string;
  type: string;
  description: string;
  content: unknown;
  cooldown: number;
  cooldown_expiration: string;
  created_at: string;
}

export interface LogData extends BaseAPIResponse {
  data: Log[];
}

export interface CharacterData {
  data: Character[];
}

@Injectable({
  providedIn: 'root',
})
export class ArtifactsMyCharactersService {
  constructor(private http: HttpClient) {}

  actionMove(name: string, x: number, y: number) {
    return this.http.post<CharacterMovementData>(
      `/my/${name}/action/move`,
      {
        x,
        y,
      },
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionEquipItem(name: string, code: string, slot: ItemSlot) {
    return this.http.post<EquipRequest>(
      `/my/${name}/action/equip`,
      {
        code,
        slot,
      },
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionUnequipItem(name: string, slot: ItemSlot) {
    return this.http.post<EquipRequest>(
      `/my/${name}/action/unequip`,
      {
        slot,
      },
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionFight(name: string) {
    return this.http.post<CharacterFightData>(
      `/my/${name}/action/fight`,
      {},
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionGathering(name: string) {
    return this.http.post<SkillData>(
      `/my/${name}/action/gathering`,
      {},
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionCrafting(name: string, code: string, quantity = 1) {
    return this.http.post<SkillData>(
      `/my/${name}/action/crafting`,
      {
        code,
        quantity,
      },
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionDepositBank(name: string, code: string, quantity: number) {
    return this.http.post<BankItem>(
      `/my/${name}/action/bank/deposit`,
      {
        code,
        quantity,
      },
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionDepositBankGold(name: string, quantity: number) {
    return this.http.post<GoldTransaction>(
      `/my/${name}/action/bank/deposit/gold`,
      {
        quantity,
      },
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionRecycling(name: string, code: string, quantity = 1) {
    return this.http.post<RecyclingData>(
      `/my/${name}/action/recycling`,
      {
        code,
        quantity,
      },
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionWithdrawBank(name: string, code: string, quantity: number) {
    return this.http.post<BankItem>(
      `/my/${name}/action/bank/withdraw`,
      {
        code,
        quantity,
      },
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionWithdrawBankGold(name: string, quantity: number) {
    return this.http.post<GoldTransaction>(
      `/my/${name}/action/bank/withdraw/gold`,
      {
        quantity,
      },
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionGeBuyItem(name: string, code: string, quantity: number, price: number) {
    return this.http.post<GETransactionList>(
      `/my/${name}/action/ge/buy`,
      {
        code,
        quantity,
        price,
      },
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionGeSellItem(
    name: string,
    code: string,
    quantity: number,
    price: number,
  ) {
    return this.http.post<GETransactionList>(
      `/my/${name}/action/ge/sell`,
      {
        code,
        quantity,
        price,
      },
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionAcceptNewTask(name: string) {
    return this.http.post<TaskData>(
      `/my/${name}/action/task/new`,
      {},
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionCompleteTask(name: string) {
    return this.http.post<TaskRewardData>(
      `/my/${name}/action/task/complete`,
      {},
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionTaskExchange(name: string) {
    return this.http.post<TaskRewardData>(
      `/my/${name}/action/task/exchange`,
      {},
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  actionDeleteItem(name: string, code: string, quantity: number) {
    return this.http.post<DeleteItem>(
      `/my/${name}/action/delete`,
      {
        code,
        quantity,
      },
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  getAllCharactersLogs(page = 1, size = 50) {
    return this.http.get<LogData>('/my/logs', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      params: {
        page,
        size,
      },
    });
  }

  getMyCharacters() {
    return this.http.get<CharacterData>('/my/characters', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
    });
  }
}
