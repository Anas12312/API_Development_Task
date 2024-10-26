import { Button, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import config from "../config.json"
import { AppContext } from "../context/AppContext";
interface User {
    name: string
    email: string
}
interface Org {
    name: string
    description: string
    _id: string
    organization_members: string
}
export default function Home() {
    const [users, setUsers] = useState<User[]>([])
    const [orgs, setOrgs] = useState<Org[]>([])
    const { token } = useContext(AppContext)
    async function loadData() {
        // console.log(token);
        const response1 = await fetch(config.API_URL + "/organization", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        const orgs = await response1.json()
        setOrgs(orgs)


    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <div className="w-screen h-screen flex justify-start pt-20 items-center flex-col">
            <div className="text-2xl mb-10 font-semibold">Organizations Table</div>
            <div>
                <Table color="danger" >
                    <TableHeader className="bg-[#66aaf9]">
                        <TableColumn className="text-white text-xl bg-[#66aaf9]">
                            ID
                        </TableColumn>
                        <TableColumn className="text-white text-xl bg-[#66aaf9]">
                            Name
                        </TableColumn>
                        <TableColumn className="text-white text-xl bg-[#66aaf9]">
                            Description
                        </TableColumn>
                        <TableColumn className="text-white text-xl bg-[#66aaf9] text-center">
                            Number of Members
                        </TableColumn>
                        <TableColumn className="text-white text-xl bg-[#66aaf9] text-center">
                            {""}
                        </TableColumn>
                    </TableHeader>
                    <TableBody>
                        {
                            orgs.map(org => {
                                return (
                                    <TableRow className="text-xl">
                                        <TableCell className="text-lg w-96">
                                            {org._id}
                                        </TableCell>
                                        <TableCell className="text-lg w-60">
                                            {org.name}
                                        </TableCell>
                                        <TableCell className="text-lg w-60">
                                            {org.description}
                                        </TableCell>
                                        <TableCell className="text-lg w-72 text-center">
                                            {org.organization_members.length}
                                        </TableCell>
                                        <TableCell className="text-lg w-40 text-center">
                                            <Button className="text-lg" color="primary">
                                                Invite
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}