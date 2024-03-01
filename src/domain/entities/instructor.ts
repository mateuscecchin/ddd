import { randomUUID } from "crypto";
import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

interface IntructorProps {
  name: string;
}

export class Instructor extends Entity<IntructorProps> {
  get name() {
    return this.props.name;
  }

  static create(props: IntructorProps, id?: UniqueEntityId) {
    const instructor = new Instructor(props, id);
    return instructor;
  }
}
