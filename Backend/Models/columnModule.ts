// Purpose: Model for columnModule.
import { RowDataPacket } from "mysql2";
import { pool } from "../db2";


interface ColumnModule {
    name: string;
}

export const getColumns = async (tableName: string): Promise<ColumnModule[]> => {
    try {
        const [rows] = await pool.execute<RowDataPacket[]>(
            `SELECT column_name as columnName 
            FROM information_schema.columns 
            WHERE table_name = ?`, [tableName]
        );
        return rows.map((row: RowDataPacket) => row.columnName);
    } catch (error) {
        console.error("Error in retrieving columns: ", error);
        throw error;
    }
};