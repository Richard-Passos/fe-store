import { Table } from '@/components/ui';
import { cn } from '@/utils';

const TableDemo = ({ className, ...props }) => {
  return (
    <Table
      className={cn('mx-auto max-w-xl', className)}
      {...props}
    >
      <Table.Caption>A list of your recent invoices.</Table.Caption>

      <Table.Header>
        <Table.Row>
          <Table.Head className='w-24'>Invoice</Table.Head>

          <Table.Head>Status</Table.Head>

          <Table.Head>Method</Table.Head>

          <Table.Head className='text-right'>Amount</Table.Head>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {invoices.map(
          ({ invoice, paymentStatus, paymentMethod, totalAmount }) => (
            <Table.Row key={invoice}>
              <Table.Cell className='font-medium'>{invoice}</Table.Cell>

              <Table.Cell>{paymentStatus}</Table.Cell>

              <Table.Cell>{paymentMethod}</Table.Cell>

              <Table.Cell className='text-right'>{totalAmount}</Table.Cell>
            </Table.Row>
          ),
        )}
      </Table.Body>
    </Table>
  );
};

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

export default TableDemo;
