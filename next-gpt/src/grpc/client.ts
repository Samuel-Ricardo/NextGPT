import * as protoLoader from "@grpc/proto-loader"
import * as grpc from "@grpc/grpc-js"
import path from "path"
import { ProtoGrpcType } from "./rpc/chat"
import { ENV } from "@/config"

const packageDefinition = protoLoader.loadSync(
  path.resolve(process.cwd(), "proto", "chat.proto")
)
const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType

export const chatClient = new proto.pb.ChatService(
  ENV.DOCKER.GRCP.SERVICE.URL(),
  grpc.credentials.createInsecure()
)

// localhost - ao proprio

// nome db

// /etc/hosts
// host.docker.internal --- 172.17.0.1 (Docker Gateway)

//Mac ou Linux

// /etc/hosts

//127.0.0.1 host.docker.internal

// Windows

// C:\Windows\System32\drivers\etc\hosts

//127.0.0.1 host.docker.internal
