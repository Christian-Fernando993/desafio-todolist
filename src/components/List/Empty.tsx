'use client'

import { ClipboardText } from "phosphor-react";

export function Empty() {
    return (
        <div className="border-t border-gray-400 ">
            <div className="py-16 flex flex-col justify-center items-center m-auto gap-4">
                <ClipboardText size={56} />
                <div className="w-96 grid justify-center items-center">
                    <p className="text-base font-bold ">
                        Você ainda não tem tarefas cadastradas
                    </p>
                    <p className="text-base font-normal">
                            Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            </div>
        </div>
    )
}