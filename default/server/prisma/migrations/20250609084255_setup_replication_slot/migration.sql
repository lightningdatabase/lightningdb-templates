DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM pg_replication_slots 
    WHERE slot_name = 'lightningdb_slot'
  ) THEN
    PERFORM pg_create_logical_replication_slot('lightningdb_slot', 'wal2json');
  END IF;
END $$;

ALTER TABLE users REPLICA IDENTITY FULL;

ALTER TABLE posts REPLICA IDENTITY FULL;