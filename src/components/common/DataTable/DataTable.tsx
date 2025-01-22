import { FC, PropsWithChildren } from 'react';
import { Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography, TypographyProps } from '@mui/material';
import { SortOrder } from '@models';
import { Column, useExpanded, useSortBy, useTable } from 'react-table';
import { SortIcon } from '@components/common/SortIcon';

const Body1: FC<TypographyProps> = ({ sx, ...props }) => <Typography sx={{ ...sx, wordBreak: 'break-word' }} {...props} />;

export interface IDataTableProps<DataType extends object = object> {
	columns: Column<DataType>[];
	data: DataType[];
}

export const DataTable = <DataType extends object>({ columns, data }: PropsWithChildren<IDataTableProps<DataType>>) => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
		{ columns, data, disableMultiSort: true },
		useSortBy,
		useExpanded
	);

	return (
		<Table {...getTableProps()} stickyHeader>
			<TableHead>
				{headerGroups.map((headerGroup, i) => (
					<TableRow {...headerGroup.getHeaderGroupProps()} key={`header-${headerGroup.id}-${i}`}>
						{headerGroup.headers.map((column, j) => (
							<TableCell
								{...column.getHeaderProps(column.getSortByToggleProps())}
								key={`header-cell-${headerGroup.id}-${i}-${j}`}
								sx={{
									cursor: column.canSort ? 'pointer' : undefined,
									paddingX: 2,
									paddingY: 1.5,
									backgroundColor: 'common.black',
									color: 'common.white',
									width: column.width,
									maxWidth: column.maxWidth
								}}
							>
								<Stack direction="row" alignItems="center" justifyContent="space-between">
									<Body1>{column.render('Header')}</Body1>
									<SortIcon
										sortable={column.canSort}
										sortOrder={column.isSorted ? (column.isSortedDesc ? SortOrder.DESC : SortOrder.ASC) : undefined}
									/>
								</Stack>
							</TableCell>
						))}
					</TableRow>
				))}
			</TableHead>
			<TableBody {...getTableBodyProps()}>
				{rows.map((row, i) => {
					prepareRow(row);
					return (
						<TableRow {...row.getRowProps()} key={`row-${row.id}-${i}`}>
							{row.cells.map((cell, j) => {
								return (
									<TableCell
										{...cell.getCellProps()}
										key={`row-${row.id}-${i}-cell-${j}`}
										sx={{
											paddingX: 2,
											minHeight: 80,
											height: 80,
											backgroundColor: i % 2 ? 'grey.50' : 'common.white',
											borderLeft: (theme) => (j === 0 ? undefined : `1px solid ${theme.palette.grey[100]}`)
										}}
									>
										{cell.render('Cell')}
									</TableCell>
								);
							})}
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};
