import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Carrer from "./_component";

export default function Home() {
  return (
    <main>
      <div className={styles.resume_subject}>
        <h3>
          자동차 직무_portfolio _ 202238082_하지훈
        </h3>
      </div>

      <div className={styles.profile_data}>
        <div className={styles.image_margin}>
          <Image
            className={styles.myimage}
            src="/profile/my.jpg"
            width={150}
            height={180}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.image_left}>
        <div> #
          <div className={styles.image_test}>
            
          
            <div> </div>
            <div className={styles.profile_info_general_name}>하지훈</div>
            <div className={styles.profile_info_general_year}>
              남 1995년 (만 28세)
            </div>
          </div>
          </div>
          <div className={styles.profile_info_detail}>
            <div class={styles.profile_label}>휴대폰 | 010-5628-1000</div>
            <div class={styles.profile_label}>Email | xszx12@gachon.ac.kr</div>
            <div class={styles.profile_label}>전화번호 | 02-000-0000</div>
            <div class={styles.profile_label}>
              주소 | 서울 천호대로109길 
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className={styles.grid_container}>
          <div>
            <div className={styles.grid_item}>학력</div>
            <div className={styles.grid_item}>가천대 </div>
            <div className={styles.grid_item}>
              <div>대학교(4년)</div>
              <div>재학</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>경력</div>
            <div className={styles.grid_item}>와보텍</div>
            <div className={styles.grid_item}>
              <div>재직</div>
              <div> 중 1년 2개월</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>
              인턴&middot;대외활동 / 해외경험
            </div>
            <div className={styles.grid_item}>청소년안전공모전 수상</div>
            <div className={styles.grid_item}>2022 R-biz 챌린지 수상</div>
            
          </div>

          <div>
            <div className={styles.grid_item}>자격증 / 어학</div>
            <div className={styles.grid_item}>승강기 기능사</div>
            <div className={styles.grid_item}>영어-회화가능</div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.keyword_box}>
          <Link href="https://www.3ds.com/ko/products-services/catia/?_gl=1*107ohq0*_up*MQ..*_ga*MTMzMDUyOTkwLjE3MTIzNjU3NzM.*_ga_DYJDKXYEZ4*MTcxMjM2NTc3Mi4xLjAuMTcxMjM2NTc3Mi4wLjAuMA..">
            <button type="button" className={styles.list_btn}>
              <span className={styles.btn_gap}>Catia</span>
            </button>
          </Link>

          <Link href="https://plm.sw.siemens.com/ko-KR/nx/">
            <button type="button" className={styles.list_btn}>
              <span className={styles.btn_gap}>NX</span>
            </button>
          </Link>
          <Link href="https://kr.mathworks.com/products/matlab.html">
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>Matlab</span>
          </button>
          </Link>
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>ReactJS</span>
          </button>
        
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>VIsualC·C++</span>
          </button>
          
        </div>
      </section>
      <section>
        <h1 className={styles.school_title}>학력</h1>
        <div className={styles.school_title_grid_margin}>
          <div className={styles.school_title_grid}>
            <div>
              <div>2022. 03 ~ 2025. 02</div>
              <div>졸업</div>
            </div>
            <div>
              <div>
                <div>가천대 </div>
                <div>미래자동차공학</div>
              </div>
              <div>
                <div>
                  <div>
                    <div>학점</div>
                    <div>3.95 / 4.5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.school_title_grid}>
            <div>
              <div>2014</div>
              <div>졸업 </div>
            </div>
            <div>
              <div>
                <div>보성고등학교 </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Carrer />
    </main>
  );
}
