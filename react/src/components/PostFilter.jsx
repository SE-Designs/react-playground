import Input from "./UI/Input";
import React from "react";
import Select from "./UI/Select";

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div style={{ display: "flex", justifyContent: "space-between" }}>
			<Select
				value={filter.sort}
				onChange={(selectedSort) =>
					setFilter({ ...filter, sort: selectedSort })
				}
				options={[
					{ value: "title", name: "По названию" },
					{ value: "description", name: "По описанию" },
				]}
				defaultValue="Сортировка"
			/>
			<Input
				value={filter.query}
				onChange={(e) => setFilter({ ...filter, query: e.target.value })}
				placeholder="Поиск по..."
			/>
		</div>
	);
};

export default PostFilter;
