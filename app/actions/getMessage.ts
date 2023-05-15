import prisma from "@/app/libs/prismadb";

const getMessages = async (converstaionId: string) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: converstaionId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createAt: "asc",
      },
    });
    return messages;
  } catch (error: any) {
    return [];
  }
};

export default getMessages;
