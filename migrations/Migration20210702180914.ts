import { Migration } from '@mikro-orm/migrations';

export class Migration20210702180914 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "temperature" ("id" serial primary key, "_celsius" int4 not null, "_farenheit" int4 not null, "_recorded_at" timestamptz(0) not null, "_updated_at" timestamptz(0) not null);');
  }

}
