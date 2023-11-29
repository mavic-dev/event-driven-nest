import { KafkaOptions, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

export const KAFKA_OPTIONS: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    producer: {
      createPartitioner: Partitioners.LegacyPartitioner,
    },
    client: {
      clientId: 'your-client-id',
      brokers: process.env.BROKER_KAFKA
        ? process.env.BROKER_KAFKA.split(',')
        : ['localhost:9092'],
    },
    consumer: {
      groupId: 'your-group-id',
    },
  },
};
