import { NextResponse } from 'next/server';
import { Request } from 'next/dist/compiled/@edge-runtime/primitives';
import { assert, object, pattern, size, string, optional } from 'superstruct';
import { CreateUser } from '@/services/api/user/UserService';
import CreateUserInterface from '@/services/api/user/UserTypes';

const bcrypt = require('bcrypt');

export async function POST(req: Request): Promise<NextResponse> {
  const data = await req.json();
  console.log(data)
  const validation = validate(data);
  if (validation) return validation;
  await hashPassword(data);
  try {
    const userData: CreateUserInterface = {
      email: data.email,
      username: data.username ? data.username : null,
      password: data.password,
    };
    const user = await CreateUser(userData);

    if (!user) throw 'User could not be created';


    return NextResponse.json(
      {
        message: 'User created successfully',
      },
      {
        status: 201,
      },
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: e,
      },
      { status: 500 },
    );
  }
}

function validate(data: any) {
  try {
    const User = object({
      email: size(
        pattern(string(), /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        1,
        50,
      ),
      username: optional(size(string(), 1, 20)),
      password: string(),
    });

    assert(data, User);
  } catch (e) {
    return NextResponse.json(
      {
        message: e,
      },
      { status: 422 },
    );
  }
}

async function hashPassword(data: any): Promise<void> {
  const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS) || 10);
  data.password = await bcrypt.hash(data.password, salt);
}

