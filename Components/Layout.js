import React from "react";

import Image from "next/image";
import logoPic from "../public/photo.jpg";

import { useEffect, useState } from "react";

import { sanityClient } from "../sanity";
import Card from "./Card";

import { weeklyQuery } from "../helpers/Queries";

import styles from './Layout.module.css';

function Layout() {
  const [openedZone, setOpenedZone] = useState("");
  const [weeks, setWeeks] = useState([]);
  const [data, setData] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [Zone1, setZone1] = useState(
    data.find((element) => element.zone.name == "Zone1")
  );
  const [Zone2, setZone2] = useState(
    data.find((element) => element.zone.name == "Zone2")
  );
  const [Zone3, setZone3] = useState(
    data.find((element) => element.zone.name == "Zone3")
  );
  const [Zone4, setZone4] = useState(
    data.find((element) => element.zone.name == "Zone4")
  );
  const [Zone5, setZone5] = useState(
    data.find((element) => element.zone.name == "Zone5")
  );
  const [Zone6, setZone6] = useState(
    data.find((element) => element.zone.name == "Zone6")
  );
  const [Zone7, setZone7] = useState(
    data.find((element) => element.zone.name == "Zone7")
  );

  useEffect(() => {
    const fetchInitialdata = async () => {
      const query = weeklyQuery(0);
      const weekQuery = `
      *[_type == "week"]{
        weekNumber,
        avancement,
        retard,
        budget
      } | order(weekNumber asc)`;

      const weeks = await sanityClient.fetch(weekQuery);
      const data = await sanityClient.fetch(query);

      setWeeks(weeks);
      setData(data);
      setZone1(data.find((element) => element.zone.name == "Zone1"));
      setZone2(data.find((element) => element.zone.name == "Zone2"));
      setZone3(data.find((element) => element.zone.name == "Zone3"));
      setZone4(data.find((element) => element.zone.name == "Zone4"));
      setZone5(data.find((element) => element.zone.name == "Zone5"));
      setZone6(data.find((element) => element.zone.name == "Zone6"));
      setZone7(data.find((element) => element.zone.name == "Zone7"));
    };

    fetchInitialdata();
  }, []);

  useEffect(() => {
    const fetchChangedData = async () => {
      const query = weeklyQuery(selectedWeek);
      const data = await sanityClient.fetch(query);
      if (data) {
        setZone1(data.find((element) => element.zone.name == "Zone1"));
        setZone2(data.find((element) => element.zone.name == "Zone2"));
        setZone3(data.find((element) => element.zone.name == "Zone3"));
        setZone4(data.find((element) => element.zone.name == "Zone4"));
        setZone5(data.find((element) => element.zone.name == "Zone5"));
        setZone6(data.find((element) => element.zone.name == "Zone6"));
        setZone7(data.find((element) => element.zone.name == "Zone7"));
      }
    };

    fetchChangedData();
  }, [selectedWeek]);

  const fetchWeekData = async (value) => {
    setSelectedWeek(value);
  };

  const weekOptions = weeks.map((week) => (
    <option key={week.weekNumber} value={week.weekNumber}>
      {"Semaine " + week.weekNumber}
    </option>
  ));

  return (
    <main>
      <div className={styles.Navigation}>
        <div>
          <select
            className={styles.button1}
            onChange={(e) => fetchWeekData(e.target.value)}
          >
            {weekOptions}
          </select>
          <button className={styles.button2}>
            {weeks.find((w) => w.weekNumber == selectedWeek)?.avancement} %
          </button>
          <button className={styles.button3}>
            {weeks.find((w) => w.weekNumber == selectedWeek)?.retard} jours
          </button>
          <button className={styles.button4}>
            {weeks.find((w) => w.weekNumber == selectedWeek)?.budget} $
          </button>
        </div>
        <div className={styles.CompanyLogo}>
          <Image src={logoPic} width={50} height={50} />
        </div>
      </div>
      <div className={styles.main}>
        <div
          className={
            openedZone == "Zone1" ? styles.zone1Activated : styles.zone1
          }
          onClick={() => {
            setOpenedZone(openedZone == "Zone1" ? "" : "Zone1");
          }}
        />

        {openedZone == "Zone1" && typeof Zone1 != "undefined" && (
          <div className={styles.Zone1Card}>
            <div className={styles.Card}>
              {
                <Card
                  avancementGlobal={Zone1.avancementGlobal}
                  companies={Zone1.companies}
                  evolution={Zone1.evolution}
                  retard={Zone1.retard}
                  motif={Zone1.motif}
                  id={Zone1._id}
                />
              }
            </div>
          </div>
        )}

        <div
          className={
            openedZone == "Zone2" ? styles.zone2Activated : styles.zone2
          }
          onClick={() => {
            setOpenedZone(openedZone == "Zone2" ? "" : "Zone2");
          }}
        />

        {openedZone == "Zone2" && typeof Zone2 != "undefined" && (
          <div className={styles.Zone1Card}>
            <div className={styles.Card2}>
              {
                <Card
                  avancementGlobal={Zone2.avancementGlobal}
                  companies={Zone2.companies}
                  evolution={Zone2.evolution}
                  retard={Zone2.retard}
                  motif={Zone2.motif}
                  id={Zone2._id}
                />
              }
            </div>
          </div>
        )}

        <div
          className={
            openedZone == "Zone3" ? styles.zone3Activated : styles.zone3
          }
          onClick={() => {
            setOpenedZone(openedZone == "Zone3" ? "" : "Zone3");
          }}
        />

        {openedZone == "Zone3" && typeof Zone3 != "undefined" && (
          <div className={styles.Zone3Card}>
            <div className={styles.Card3}>
              {
                <Card
                  avancementGlobal={Zone3.avancementGlobal}
                  companies={Zone3.companies}
                  evolution={Zone3.evolution}
                  retard={Zone3.retard}
                  motif={Zone3.motif}
                  id={Zone3._id}
                />
              }
            </div>
          </div>
        )}

        <div
          className={
            openedZone == "Zone4" ? styles.zone4Activated : styles.zone4
          }
          onClick={() => {
            setOpenedZone(openedZone == "Zone4" ? "" : "Zone4");
          }}
        />

        {openedZone == "Zone4" && typeof Zone4 != "undefined" && (
          <div className={styles.Zone4Card}>
            <div className={styles.Card4}>
              {
                <Card
                  avancementGlobal={Zone4.avancementGlobal}
                  companies={Zone4.companies}
                  evolution={Zone4.evolution}
                  retard={Zone4.retard}
                  motif={Zone4.motif}
                  id={Zone4._id}
                />
              }
            </div>
          </div>
        )}

        <div
          className={
            openedZone == "Zone5" ? styles.zone5Activated : styles.zone5
          }
          onClick={() => {
            setOpenedZone(openedZone == "Zone5" ? "" : "Zone5");
          }}
        />

        {openedZone == "Zone5" && typeof Zone5 != "undefined" && (
          <div className={styles.Zone5Card}>
            <div className={styles.Card5}>
              {
                <Card
                  avancementGlobal={Zone5.avancementGlobal}
                  companies={Zone5.companies}
                  evolution={Zone5.evolution}
                  retard={Zone5.retard}
                  motif={Zone5.motif}
                  id={Zone5._id}
                />
              }
            </div>
          </div>
        )}

        <div
          className={
            openedZone == "Zone6" ? styles.zone6Activated : styles.zone6
          }
          onClick={() => {
            setOpenedZone(openedZone == "Zone6" ? "" : "Zone6");
          }}
        />

        {openedZone == "Zone6" && typeof Zone6 != "undefined" && (
          <div className={styles.Zone6Card}>
            <div className={styles.Card6}>
              {
                <Card
                  avancementGlobal={Zone6.avancementGlobal}
                  companies={Zone6.companies}
                  evolution={Zone6.evolution}
                  retard={Zone6.retard}
                  motif={Zone6.motif}
                  id={Zone6._id}
                />
              }
            </div>
          </div>
        )}

        <div
          className={
            openedZone == "Zone7" ? styles.zone7Activated : styles.zone7
          }
          onClick={() => {
            setOpenedZone(openedZone == "Zone7" ? "" : "Zone7");
          }}
        />

        {openedZone == "Zone7" && typeof Zone7 != "undefined" && (
          <div className={styles.Zone7Card}>
            <div className={styles.Card7}>
              {
                <Card
                  avancementGlobal={Zone7.avancementGlobal}
                  companies={Zone7.companies}
                  evolution={Zone7.evolution}
                  retard={Zone7.retard}
                  motif={Zone7.motif}
                  id={Zone7._id}
                />
              }
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Layout;
