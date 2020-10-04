import { Connection, createConnection, getConnection } from "typeorm";

const create = async (): Promise<Connection> => createConnection();

const close = async (): Promise<void> => getConnection().close();

const clear = async (): Promise<void> => {
  const connection = getConnection();
  const entities = connection.entityMetadatas;

  const promises = entities.map(async (entity) => {
    const repository = connection.getRepository(entity.name);
    await repository.query(`DELETE FROM ${entity.tableName}`);
  });

  await Promise.all(promises);
};

export default {
  create,
  close,
  clear,
};
