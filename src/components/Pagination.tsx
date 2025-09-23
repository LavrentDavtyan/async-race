import React from 'react';


type Props = {
page: number;
total: number;
perPage: number;
onChange: (p: number) => void;
};


const Pagination: React.FC<Props> = ({ page, total, perPage, onChange }) => {
const pages = Math.max(1, Math.ceil(total / perPage));


return (
<div className="pagination">
<button type="button" onClick={() => onChange(Math.max(1, page - 1))} disabled={page === 1}>Prev</button>
<span>{page} / {pages}</span>
<button type="button" onClick={() => onChange(Math.min(pages, page + 1))} disabled={page === pages}>Next</button>
</div>
);
};


export default Pagination;