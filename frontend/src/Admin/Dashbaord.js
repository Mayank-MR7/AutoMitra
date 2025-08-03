import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("hire");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const inactivityTimer = useRef(null);

  const tabConfig = useMemo(() => ({
    hire: {
      title: "Get Hired",
      endpoint: "/api/hire/basic",
      fields: ["name", "phone", "email", "city", "experience"],
    },
    mechanic: {
      title: "Hire Mechanic",
      endpoint: "/api/mechanic/basic",
      fields: ["name", "phone", "email", "city", "service"],
    },
    insurance: {
      title: "Insurance Claim",
      endpoint: "/api/insurance/basic",
      fields: [
        "insuredName",
        "policyNumber",
        "contactPersonNumber",
        "vehicleNumber",
        "accidentDate",
      ],
    },
    franchise: {
      title: "Get Franchise",
      endpoint: "/api/franchise/basic",
      fields: ["name", "phone", "email", "city"],
    },
    contact: {
      title: "Contact Us",
      endpoint: "/api/contact/basic",
      fields: ["name", "phone", "email", "comment"],
    },
  }), []);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${API_BASE_URL}${tabConfig[activeTab].endpoint}?page=${page}&limit=${limit}`
        );
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        setData(result.data || []);
        setTotalPages(Math.ceil(result.total / limit));
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load data");
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab, page, limit, tabConfig]);

  // Tab click handler
  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    setPage(1);
  };

  // Prevent back navigation
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    const handlePopState = () => navigate("/", { replace: true });
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigate]);

  // Auto redirect on inactivity
  useEffect(() => {
    const resetTimer = () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      inactivityTimer.current = setTimeout(() => {
        toast.warn("Session expired due to inactivity. Redirecting...");
        navigate("/", { replace: true });
      }, 10 * 60 * 1000);
    };

    const activityEvents = ["mousemove", "mousedown", "click", "keydown", "scroll", "touchstart"];
    activityEvents.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer();

    return () => {
      activityEvents.forEach((event) => window.removeEventListener(event, resetTimer));
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    };
  }, [navigate]);

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.heading}>Admin Dashboard</h1>

      <div className={styles.cardContainer}>
        {Object.keys(tabConfig).map((tabKey) => (
          <div
            key={tabKey}
            className={`${styles.card} ${activeTab === tabKey ? styles.active : ""}`}
            onClick={() => handleTabClick(tabKey)}
          >
            {tabConfig[tabKey].title}
          </div>
        ))}
      </div>

      <div className={styles.tableContainer}>
        <h2 className={styles.tableTitle}>{tabConfig[activeTab].title} Details</h2>

        {isLoading ? (
          <div className={styles.loading}>Loading...</div>
        ) : data.length === 0 ? (
          <div className={styles.noData}>No submissions found</div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Sl No</th>
                  {tabConfig[activeTab].fields.map((field) => (
                    <th key={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((entry, idx) => (
                  <tr key={entry._id || idx}>
                    <td>{(page - 1) * limit + idx + 1}</td>
                    {tabConfig[activeTab].fields.map((field) => (
                      <td key={field}>{entry[field] || "-"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  className={styles.pageBtn}
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                >
                  Prev
                </button>

                <span className={styles.pageInfo}>
                  Page {page} of {totalPages}
                </span>

                <button
                  className={styles.pageBtn}
                  onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
    </div>
  );
};

export default Dashboard;
