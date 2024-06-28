import React, { useEffect, useState } from 'react';
import { Table, Pagination } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 10;

    const fetchBooks = (page) => {
        fetch(`http://localhost:5000/all-books?page=${page}&limit=${booksPerPage}`)
            .then((res) => res.json())
            .then((data) => {
                if (data && data.books) {
                    setAllBooks(data.books);
                } else {
                    setAllBooks([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching books:", error);
                setAllBooks([]);
            });
    };

    useEffect(() => {
        fetchBooks(currentPage);
    }, [currentPage]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/book/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    fetchBooks(currentPage);
                } else {
                    alert("Failed to delete the book. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error deleting book:", error);
            });
    };

    const totalPages = Math.ceil(allBooks.length / booksPerPage);

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Manage Your Books Inventory!</h2>

            <Table className='lg:w-[1180px]'>
                <Table.Head>
                    <Table.HeadCell>No.</Table.HeadCell>
                    <Table.HeadCell>Book name</Table.HeadCell>
                    <Table.HeadCell>Author Name</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>Edit or Manage</Table.HeadCell>
                </Table.Head>
                {allBooks.length > 0 ? (
                    allBooks.map((book, index) => (
                        <Table.Body className="divide-y" key={book._id}>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {(currentPage - 1) * booksPerPage + index + 1}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {book.bookTitle}
                                </Table.Cell>
                                <Table.Cell>{book.authorName}</Table.Cell>
                                <Table.Cell>{book.category}</Table.Cell>
                                <Table.Cell>$10.99</Table.Cell>
                                <Table.Cell>
                                    <Link
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                                        to={`/admin/dashboard/edit-books/${book._id}`}
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'
                                        onClick={() => handleDelete(book._id)}
                                    >
                                        Delete
                                    </button>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))
                ) : (
                    <Table.Body>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell colSpan="6" className="text-center text-gray-500 dark:text-gray-400">
                                No books available.
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                )}
            </Table>

            <div className="flex items-center justify-center text-center mt-8">
                <Pagination
                    currentPage={currentPage}
                    layout="pagination"
                    nextLabel="Go forward"
                    onPageChange={(page) => setCurrentPage(page)}
                    previousLabel="Go back"
                    showIcons
                    totalPages={totalPages}
                />
            </div>
        </div>
    );
};

export default ManageBooks;
