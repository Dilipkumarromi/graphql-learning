import { Op } from "sequelize";

const filteringConditions = (req: any) => {
    // Determine the query source: body or query parameters
    const query = Object.keys(req.body).length ? req.body : req.query;
    const keysToIgnore = ["take", "limit", "order_by", "order_direction"];
    let whereCondition: any = {};
    // Initialize whereCondition with an OR condition if there are multiple query parameters
    if (Object.keys(query).length > 1) {
      whereCondition[Op.or] = [];
    }
    // Iterate over each query parameter
    Object.keys(query).forEach((key) => {
      if (query[key] && !keysToIgnore.includes(key)) {
        if (Object.keys(query).length > 1) {
          whereCondition[Op.or].push({ [key]: { [Op.substring]: query[key] } });
        } else {
          whereCondition[key] = { [Op.substring]: query[key] };
        }
      }
    });
  
    // Check if only `take` and `limit` are present
    const onlyTakeAndLimit = Object.keys(query).every((key) =>
      keysToIgnore.includes(key)
    );
    if (onlyTakeAndLimit) {
      whereCondition = {
        deletedAt: { [Op.is]: null },
      };
    }
  
    // Pagination parameters
    const page = parseInt(query.take, 10) || 0; // Default to page 0 if not provided
    const pageSize = parseInt(query.limit, 10) || 10; // Default to 10 items per page if not provided
    const offset = page * pageSize;
    const limit = pageSize;
  
    // Order by parameters
    const orderBy = query.order_by || "id"; // Default to ordering by 'id' if not provided
    const orderDirection = query.order_direction === "ASC" ? "ASC" : "DESC"; // Default to descending order if not provided
    return {
      whereCondition,
      limit,
      offset,
      order: [[orderBy, orderDirection]],
    };
  };

  export default filteringConditions