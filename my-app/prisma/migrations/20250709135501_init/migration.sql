-- CreateTable
CREATE TABLE "DiscoveryRequest" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isBusiness" BOOLEAN NOT NULL,
    "allowKVKK" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscoveryRequest_pkey" PRIMARY KEY ("id")
);
